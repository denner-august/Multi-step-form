import Image, { StaticImageData } from "next/image";

interface imageProps {
  imagem: string | StaticImageData;
  height: number;
  width: number;
  alt: string;
}

export function ImageComponent({ imagem, height, width, alt }: imageProps) {
  return <Image src={imagem} width={width} height={height} alt={alt} />;
}
