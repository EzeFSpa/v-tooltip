import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

export default {
   inserted(el, binding) {
		let options = {
			appendTo: document.body,
			allowHTML: true,
			boundary: "window",
			content: binding.value.content instanceof Function ? binding.value.content() : binding.value.content,
			placement: binding.value.placement === undefined ? "bottom" : binding.value.placement,
			delay: binding.value.delay === undefined ? 0 : binding.value.delay,
			hideOnClick: binding.value.hideOnClick === undefined ? true : binding.value.hideOnClick,
			maxWidth: binding.value.maxWidth === undefined ? 350 : binding.value.maxWidth,
			offset: binding.value.offset === undefined ? [0, 10] : binding.value.offset,
			trigger: binding.value.trigger === undefined ? "mouseenter focus" : binding.value.trigger,
			interactive: binding.value.interactive === undefined ? false : binding.value.interactive,
			interactiveDebounce: binding.value.interactiveDebounce === undefined ? 0 : binding.value.interactiveDebounce,
			arrow: binding.value.arrow === undefined ? true : binding.value.arrow,
			showOnCreate: binding.value.showOnCreate === undefined ? false : binding.value.showOnCreate,			
			onShow(instance) {
				if ( binding.value.content instanceof Function )
					instance.setContent(binding.value.content());
				else
					instance.setContent(binding.value.content);

				if ( binding.value.showOnElipsisOnly === true ) {
					let isEllipsisActive = function () {
						return (el.offsetWidth < el.scrollWidth);
					}
					return isEllipsisActive()
				}

			},
			popperOptions: {
				modifiers: {
					preventOverflow: {
						enabled: false,
					},
					hide: {
						enabled: false,
					},
				},
			},
		};

		tippy(el, options);
   },

   unbind(el) {
      el._tippy.destroy();
   }
}


