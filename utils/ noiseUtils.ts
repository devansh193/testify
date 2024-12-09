export function generateNoiseTexture(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
): void {
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const value = Math.random() * 255;
    data[i] = value; // R
    data[i + 1] = value; // G
    data[i + 2] = value; // B
    data[i + 3] = 255; // A
  }

  ctx.putImageData(imageData, 0, 0);
}
