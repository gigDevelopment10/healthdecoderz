import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(
  (
    {
      className,
      items,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCSS = "scale-75",
      ...props
    },
    ref
  ) => {
    let slideItems;
    const isSmall = (index) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    if (centerMode) {
      slideItems = items.map((child, index) => {
        if (isSmall(index)) {
          return React.cloneElement(child, {
            ...child.props,
            className: child?.props?.className + " " + activeSlideCSS,
          });
        }
        return React.cloneElement(child);
      });
    } else {
      slideItems = items;
    }

    return (
      <div className={className}>
        <AliceCarousel
          items={slideItems}
          infinite
          mouseTracking
          disableButtonsControls
          disableDotsControls
          ref={ref}
          slideItems
          {...props}
        />
      </div>
    );
  }
);

export { Slider };
