import { GoArrowRight } from "react-icons/go";
import style from "./style.module.css";

interface GetStartedProps {
  title: string;
}

export function ButtonCta({ title }: GetStartedProps) {
  return (
    <button className={style.button} type="button">
      {title}
      <span>
        <GoArrowRight />
      </span>
    </button>
  );
}
