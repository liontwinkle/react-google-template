import React from 'react';
import TooltipTrigger from 'react-popper-tooltip';

const Tooltip = ({click, addClasses, children, tooltip, hideArrow, ...props}) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip show fade bs-tooltip-'+placement
        })}
      >
        {!hideArrow && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: 'arrow',
              'data-placement': placement
            })}
          />
        )}
        <div className="tooltip-inner">
            {tooltip}
        </div>
      </div>
    )}
  >
    {({getTriggerProps, triggerRef}) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger '+addClasses,
          onClick: click
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
);

export default Tooltip;