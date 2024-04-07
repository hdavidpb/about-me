interface Props {
  label: string;
  squareWidth?: "md:w-5" | "md:w-3";
  squareHeight?: "md:h-5" | "md:h-3";
  textWidthMd?: "md:text-3xl" | "md:text-2xl" | "md:text-sm" | "md:text-base";
  textWidthSm?: "text-lg" | "text-base" | "text-xs" | "text-sm";
  textFont?: "font-semibold" | "font-normal" | "font-light";
}

export const ItemSquare = ({
  label,
  squareHeight = "md:h-5",
  squareWidth = "md:w-5",
  textWidthMd = "md:text-3xl",
  textFont = "font-semibold",
  textWidthSm = "text-lg",
}: Props) => {
  return (
    <div className="flex justify-center items-center gap-1">
      <div
        className={`${squareHeight} ${squareWidth} w-3 h-3 bg-primary`}
      ></div>
      <h1 className={`${textWidthMd} ${textWidthSm} ${textFont} mr-8`}>
        {label}
      </h1>
    </div>
  );
};
