'use client'
import { useEffect, useRef } from "react";

interface Point {
  px: number;
  py: number;
}

interface DrawPart {
  control: Point;
  p1: Point;
  p2?: Point;
  radius?: number;
  func: (control: Point, p1: Point, p2?: Point, radius?: number) => void;
}

class Controller {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  screenWidth: number = 0;
  screenHeight: number = 0;
  lastRequestId: number = 0;
  objectsToDraw: DrawPart[];
  lastWidth: number = 0;
  resizeTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")!;
    this.objectsToDraw = [];

    this.resize = this.resize.bind(this);
    this.handleResizeEvent = this.handleResizeEvent.bind(this);
    this.init = this.init.bind(this);
  }

  drawCurve(control: Point, p1: Point, p2: Point = { px: 0, py: 0 }, radius: number = 0) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(p1.px, p1.py);
    ctx.arcTo(control.px, control.py, p2.px, p2.py, radius);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  drawLine(control: Point, p: Point) {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(control.px, control.py);
    ctx.lineTo(p.px, p.py);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  drawNext(part: DrawPart) {
    part.func(part.control, part.p1, part.p2, part.radius);
  }

  drawPart() {
    if (this.objectsToDraw.length > 0) {
      this.lastRequestId = requestAnimationFrame(() => {
        this.drawNext(this.objectsToDraw.shift()!);
        this.drawPart();
      });
    }
  }

  shuffleArray(target: DrawPart[]) {
    const auxArray: DrawPart[] = [];
    while (target.length > 0) {
      auxArray.push(target.shift()!);
    }

    while (auxArray.length > 0) {
      const n = Math.floor(Math.random() * auxArray.length);
      for (let i = 0; i < n; i++) {
        auxArray.push(auxArray.shift()!);
      }
      const x = auxArray.shift()!;
      target.push(x);
    }
  }

  drawWebByParts() {
    this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
    const controlPoint = { px: this.screenWidth / 2, py: this.screenHeight / 2 };
    const outerRadius = Math.min(this.screenWidth / 2, this.screenHeight / 2) + 300;

    const nLines = 18;
    const deltaAngle = 360 / nLines;
    const degree = Math.PI / 180;

    const points: Point[] = [];
    for (let i = 0; i < nLines; i++) {
      points.push({
        px: controlPoint.px + outerRadius * Math.cos(i * deltaAngle * degree),
        py: controlPoint.py + outerRadius * Math.sin(i * deltaAngle * degree)
      });
    }

    const linesToDraw: DrawPart[] = [];
    for (let i = 0; i < points.length; i++) {
      linesToDraw.push({
        control: controlPoint,
        p1: points[i],
        func: this.drawLine.bind(this)
      });
    }

    const nArcs = 18;
    const dist = Controller.d2Dist(points[0], points[1]) / 2;
    const deltaRadius = dist / nArcs;

    const arcsToDraw: DrawPart[] = [];
    for (let j = 1; j <= nArcs; j++) {
      for (let i = 0; i < points.length; i++) {
        const p1 = points[i % points.length];
        const p2 = points[(i + 1) % points.length];

        arcsToDraw.push({
          control: controlPoint,
          p1: p1,
          p2: p2,
          radius: j * deltaRadius,
          func: this.drawCurve.bind(this)
        });
      }
    }

    this.objectsToDraw = [];
    while (linesToDraw.length > 0) {
      this.objectsToDraw.push(linesToDraw.shift()!);
    }

    while (arcsToDraw.length > 0) {
      this.objectsToDraw.push(arcsToDraw.shift()!);
    }

    this.drawPart();
  }

  resize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    const outerRadius = Math.min(this.screenWidth / 2, this.screenHeight / 2) + 300;
    const controlPoint = { px: this.screenWidth / 2, py: this.screenHeight / 2 };
    const nLines = 18;
    const deltaAngle = 360 / nLines;
    const degree = Math.PI / 180;
    const points: Point[] = [];

    for (let i = 0; i < nLines; i++) {
      points.push({
        px: controlPoint.px + outerRadius * Math.cos(i * deltaAngle * degree),
        py: controlPoint.py + outerRadius * Math.sin(i * deltaAngle * degree)
      });
    }

    const dist = Controller.d2Dist(points[0], points[1]) / 2;
    const nArcs = 18;
    const deltaRadius = dist / nArcs;

    this.screenHeight = 2 * (outerRadius + deltaRadius * nArcs);

    this.canvas.width = this.screenWidth;
    this.canvas.height = this.screenHeight;

    window.cancelAnimationFrame(this.lastRequestId);
    this.objectsToDraw = [];
    this.drawWebByParts();

    this.lastWidth = window.innerWidth;
  }

  // Only re-run the (expensive) resize/animation when the WIDTH actually
  // changes. On mobile, scrolling shows/hides the browser's address bar,
  // which fires a 'resize' event with only the HEIGHT changing — that
  // used to retrigger the whole animation on every scroll.
  handleResizeEvent() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = setTimeout(() => {
      const newWidth = window.innerWidth;
      if (newWidth !== this.lastWidth) {
        this.resize();
      }
    }, 150);
  }

  init() {
    this.lastWidth = window.innerWidth;
    window.addEventListener("resize", this.handleResizeEvent);
    this.resize();
  }

  destroy() {
    window.removeEventListener("resize", this.handleResizeEvent);
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    window.cancelAnimationFrame(this.lastRequestId);
  }

  static d2Dist(p1: Point, p2: Point): number {
    const dx = p1.px - p2.px;
    const dy = p1.py - p2.py;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const WebBuild = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let controller: Controller | null = null;

    if (canvasRef.current) {
      controller = new Controller(canvasRef.current);
      controller.init();
    }

    return () => {
      controller?.destroy();
    };
  }, []);

  return (
    <div className="">
      <canvas ref={canvasRef} id="screen" style={{ background: '#090A0F', width: '100vw' }} />
    </div>
  );
};

export default WebBuild;