import { useEffect, Dispatch, SetStateAction } from "react";

export function IntroAni(
  myname: string[],
  setVisibleMessages: Dispatch<SetStateAction<string[]>>,
  setShowLine: Dispatch<SetStateAction<boolean>>,
  setStartAdding: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    setVisibleMessages([myname[0]]);
    setShowLine(true);
    setTimeout(() => {
      setStartAdding(true);
    }, 500);
  }, []);
}

export function IntroMessage(
  myname: string[],
  startAdding: boolean,
  index: number,
  setVisibleMessages: Dispatch<SetStateAction<string[]>>,
  setIndex: Dispatch<SetStateAction<number>>
) {
  useEffect(() => {
    if (!startAdding || index >= myname.length - 1) return;

    const interval = setInterval(() => {
      setVisibleMessages((prev) => [...prev, myname[index + 1]]);
      setIndex((prevIndex) => prevIndex + 1);
    }, 500);

    return () => clearInterval(interval);
  }, [startAdding, index]);
}

export function ShowScrollHint(
  visibleMessages: string[],
  myname: string[],
  showLine: boolean,
  setShowScrollHint: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (visibleMessages.length === myname.length && showLine) {
        const timeout = setTimeout(() => {
            setShowScrollHint(true);
          }, 200);
    
          return () => clearTimeout(timeout);
        }
      }, [visibleMessages, myname, showLine]);


}

export function ChainedAni(
  trigger: boolean,
  nextSetter: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (trigger) {
      setTimeout(() => {
        nextSetter(true);
      }, 500);
    }
  }, [trigger]);
}
