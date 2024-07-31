import { EmblaCarouselType } from 'embla-carousel'
import RightArrowIcon from 'public/images/right-arrow.svg'
import { useEffect, useState } from 'react'

interface ProjectControlProps {
  api: EmblaCarouselType | undefined
}

export default function ProjectControl({ api }: ProjectControlProps) {
  const [prevDisabled, setPrevDisabled] = useState<boolean>(true)
  const [nextDisabled, setNextDisabled] = useState<boolean>(false)

  const onClickPrev = () => {
    api?.scrollPrev()
    setPrevDisabled(!api?.canScrollPrev())
    setNextDisabled(!api?.canScrollNext())
  }

  const onClickNext = () => {
    api?.scrollNext()
    setPrevDisabled(!api?.canScrollPrev())
    setNextDisabled(!api?.canScrollNext())
  }

  return (
    <div className="w-full flex justify-end items-center mt-6 gap-2.5">
      <button
        className="rounded-full bg-button-bg disabled:opacity-40 group"
        onClick={onClickPrev}
        disabled={prevDisabled}
      >
        <RightArrowIcon width={36} height={36} className="rotate-180 fill-button-arrow group-hover:fill-button-hover" />
      </button>
      <button
        className="rounded-full bg-button-bg disabled:opacity-40 group"
        onClick={onClickNext}
        disabled={nextDisabled}
      >
        <RightArrowIcon width={36} height={36} className="fill-button-arrow group-hover:fill-button-hover" />
      </button>
    </div>
  )
}
