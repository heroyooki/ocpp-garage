import {
  Box,
  EventProp,
  IN_BROWSER,
  IconValue,
  SUPPORTS_INTERSECTION,
  acceleratedEasing,
  animate,
  attachedRoot,
  bindProps,
  callEvent,
  clamp,
  consoleError,
  consoleWarn,
  convertToUnit,
  createRange,
  createSimpleFunctional,
  deceleratedEasing,
  deepEqual,
  defineComponent,
  defineFunctionalComponent,
  deprecate,
  destructComputed,
  filterInputAttrs,
  findChildrenWithProvide,
  flattenFragments,
  flipAlign,
  flipCorner,
  flipSide,
  focusChild,
  focusableChildren,
  genericComponent,
  getAxis,
  getCurrentInstance,
  getCurrentInstanceName,
  getForeground,
  getNextElement,
  getObjectValueByPath,
  getOverflow,
  getPropertyFromItem,
  getScrollParent,
  getScrollParents,
  getUid,
  hasEvent,
  hasScrollbar,
  includes,
  isCssColor,
  isEmpty,
  isFixedPosition,
  isObject,
  isOn,
  keyCodes,
  makeComponentProps,
  makeThemeProps,
  matchesSelector,
  nullifyTransforms,
  omit,
  parseAnchor,
  pick,
  propsFactory,
  provideDefaults,
  provideTheme,
  refElement,
  standardEasing,
  unbindProps,
  useDisplay,
  useIcon,
  useLocale,
  useProxiedModel,
  useRender,
  useResizeObserver,
  useRtl,
  useToggleScope,
  wrapInArray
} from "./chunk-AIHC7UEU.js";
import {
  Fragment,
  Teleport,
  Text,
  Transition,
  TransitionGroup,
  camelize,
  cloneVNode,
  computed,
  createTextVNode,
  createVNode,
  effectScope,
  h,
  inject,
  isRef,
  mergeProps,
  nextTick,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  provide,
  reactive,
  readonly,
  ref,
  resolveDirective,
  resolveDynamicComponent,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  unref,
  vShow,
  warn,
  watch,
  watchEffect,
  withDirectives,
  withModifiers
} from "./chunk-QNGQRF5U.js";

// node_modules/vuetify/lib/labs/VDataTable/VDataTable.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/labs/VDataTable/VDataTable.css";

// node_modules/vuetify/lib/labs/VDataTable/VDataTableFooter.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/labs/VDataTable/VDataTableFooter.css";

// node_modules/vuetify/lib/components/VBtn/VBtn.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VBtn/VBtn.css";

// node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.css";

// node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.css";

// node_modules/vuetify/lib/composables/border.mjs
var makeBorderProps = propsFactory({
  border: [Boolean, Number, String]
}, "border");
function useBorder(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const borderClasses = computed(() => {
    const border = isRef(props) ? props.value : props.border;
    const classes = [];
    if (border === true || border === "") {
      classes.push(`${name}--border`);
    } else if (typeof border === "string" || border === 0) {
      for (const value of String(border).split(" ")) {
        classes.push(`border-${value}`);
      }
    }
    return classes;
  });
  return {
    borderClasses
  };
}

// node_modules/vuetify/lib/composables/density.mjs
var allowedDensities = [null, "default", "comfortable", "compact"];
var makeDensityProps = propsFactory({
  density: {
    type: String,
    default: "default",
    validator: (v) => allowedDensities.includes(v)
  }
}, "density");
function useDensity(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const densityClasses = computed(() => {
    return `${name}--density-${props.density}`;
  });
  return {
    densityClasses
  };
}

// node_modules/vuetify/lib/composables/elevation.mjs
var makeElevationProps = propsFactory({
  elevation: {
    type: [Number, String],
    validator(v) {
      const value = parseInt(v);
      return !isNaN(value) && value >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      value <= 24;
    }
  }
}, "elevation");
function useElevation(props) {
  const elevationClasses = computed(() => {
    const elevation = isRef(props) ? props.value : props.elevation;
    const classes = [];
    if (elevation == null)
      return classes;
    classes.push(`elevation-${elevation}`);
    return classes;
  });
  return {
    elevationClasses
  };
}

// node_modules/vuetify/lib/composables/rounded.mjs
var makeRoundedProps = propsFactory({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function useRounded(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const roundedClasses = computed(() => {
    const rounded = isRef(props) ? props.value : props.rounded;
    const classes = [];
    if (rounded === true || rounded === "") {
      classes.push(`${name}--rounded`);
    } else if (typeof rounded === "string" || rounded === 0) {
      for (const value of String(rounded).split(" ")) {
        classes.push(`rounded-${value}`);
      }
    }
    return classes;
  });
  return {
    roundedClasses
  };
}

// node_modules/vuetify/lib/composables/tag.mjs
var makeTagProps = propsFactory({
  tag: {
    type: String,
    default: "div"
  }
}, "tag");

// node_modules/vuetify/lib/composables/color.mjs
function useColor(colors) {
  return destructComputed(() => {
    const classes = [];
    const styles = {};
    if (colors.value.background) {
      if (isCssColor(colors.value.background)) {
        styles.backgroundColor = colors.value.background;
        if (!colors.value.text) {
          const textColor = getForeground(styles.backgroundColor);
          styles.color = textColor;
          styles.caretColor = textColor;
        }
      } else {
        classes.push(`bg-${colors.value.background}`);
      }
    }
    if (colors.value.text) {
      if (isCssColor(colors.value.text)) {
        styles.color = colors.value.text;
        styles.caretColor = colors.value.text;
      } else {
        classes.push(`text-${colors.value.text}`);
      }
    }
    return {
      colorClasses: classes,
      colorStyles: styles
    };
  });
}
function useTextColor(props, name) {
  const colors = computed(() => ({
    text: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: textColorClasses,
    colorStyles: textColorStyles
  } = useColor(colors);
  return {
    textColorClasses,
    textColorStyles
  };
}
function useBackgroundColor(props, name) {
  const colors = computed(() => ({
    background: isRef(props) ? props.value : name ? props[name] : null
  }));
  const {
    colorClasses: backgroundColorClasses,
    colorStyles: backgroundColorStyles
  } = useColor(colors);
  return {
    backgroundColorClasses,
    backgroundColorStyles
  };
}

// node_modules/vuetify/lib/composables/variant.mjs
var allowedVariants = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function genOverlays(isClickable, name) {
  return createVNode(Fragment, null, [isClickable && createVNode("span", {
    "key": "overlay",
    "class": `${name}__overlay`
  }, null), createVNode("span", {
    "key": "underlay",
    "class": `${name}__underlay`
  }, null)]);
}
var makeVariantProps = propsFactory({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (v) => allowedVariants.includes(v)
  }
}, "variant");
function useVariant(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const variantClasses = computed(() => {
    const {
      variant
    } = unref(props);
    return `${name}--variant-${variant}`;
  });
  const {
    colorClasses,
    colorStyles
  } = useColor(computed(() => {
    const {
      variant,
      color
    } = unref(props);
    return {
      [["elevated", "flat"].includes(variant) ? "background" : "text"]: color
    };
  }));
  return {
    colorClasses,
    colorStyles,
    variantClasses
  };
}

// node_modules/vuetify/lib/components/VBtnGroup/VBtnGroup.mjs
var makeVBtnGroupProps = propsFactory({
  divided: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps()
}, "VBtnGroup");
var VBtnGroup = genericComponent()({
  name: "VBtnGroup",
  props: makeVBtnGroupProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBtn: {
        height: "auto",
        color: toRef(props, "color"),
        density: toRef(props, "density"),
        flat: true,
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-btn-group", {
          "v-btn-group--divided": props.divided
        }, themeClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": props.style
      }, slots);
    });
  }
});

// node_modules/vuetify/lib/composables/group.mjs
var makeGroupProps = propsFactory({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group");
var makeGroupItemProps = propsFactory({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function useGroupItem(props, injectKey) {
  let required = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  const vm = getCurrentInstance("useGroupItem");
  if (!vm) {
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  }
  const id = getUid();
  provide(Symbol.for(`${injectKey.description}:id`), id);
  const group = inject(injectKey, null);
  if (!group) {
    if (!required)
      return group;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${injectKey.description}`);
  }
  const value = toRef(props, "value");
  const disabled = computed(() => !!(group.disabled.value || props.disabled));
  group.register({
    id,
    value,
    disabled
  }, vm);
  onBeforeUnmount(() => {
    group.unregister(id);
  });
  const isSelected = computed(() => {
    return group.isSelected(id);
  });
  const selectedClass = computed(() => isSelected.value && [group.selectedClass.value, props.selectedClass]);
  watch(isSelected, (value2) => {
    vm.emit("group:selected", {
      value: value2
    });
  });
  return {
    id,
    isSelected,
    toggle: () => group.select(id, !isSelected.value),
    select: (value2) => group.select(id, value2),
    selectedClass,
    value,
    disabled,
    group
  };
}
function useGroup(props, injectKey) {
  let isUnmounted = false;
  const items = reactive([]);
  const selected = useProxiedModel(props, "modelValue", [], (v) => {
    if (v == null)
      return [];
    return getIds(items, wrapInArray(v));
  }, (v) => {
    const arr = getValues(items, v);
    return props.multiple ? arr : arr[0];
  });
  const groupVm = getCurrentInstance("useGroup");
  function register(item, vm) {
    const unwrapped = item;
    const key = Symbol.for(`${injectKey.description}:id`);
    const children = findChildrenWithProvide(key, groupVm == null ? void 0 : groupVm.vnode);
    const index = children.indexOf(vm);
    if (index > -1) {
      items.splice(index, 0, unwrapped);
    } else {
      items.push(unwrapped);
    }
  }
  function unregister(id) {
    if (isUnmounted)
      return;
    forceMandatoryValue();
    const index = items.findIndex((item) => item.id === id);
    items.splice(index, 1);
  }
  function forceMandatoryValue() {
    const item = items.find((item2) => !item2.disabled);
    if (item && props.mandatory === "force" && !selected.value.length) {
      selected.value = [item.id];
    }
  }
  onMounted(() => {
    forceMandatoryValue();
  });
  onBeforeUnmount(() => {
    isUnmounted = true;
  });
  function select(id, value) {
    const item = items.find((item2) => item2.id === id);
    if (value && (item == null ? void 0 : item.disabled))
      return;
    if (props.multiple) {
      const internalValue = selected.value.slice();
      const index = internalValue.findIndex((v) => v === id);
      const isSelected = ~index;
      value = value ?? !isSelected;
      if (isSelected && props.mandatory && internalValue.length <= 1)
        return;
      if (!isSelected && props.max != null && internalValue.length + 1 > props.max)
        return;
      if (index < 0 && value)
        internalValue.push(id);
      else if (index >= 0 && !value)
        internalValue.splice(index, 1);
      selected.value = internalValue;
    } else {
      const isSelected = selected.value.includes(id);
      if (props.mandatory && isSelected)
        return;
      selected.value = value ?? !isSelected ? [id] : [];
    }
  }
  function step(offset) {
    if (props.multiple)
      consoleWarn('This method is not supported when using "multiple" prop');
    if (!selected.value.length) {
      const item = items.find((item2) => !item2.disabled);
      item && (selected.value = [item.id]);
    } else {
      const currentId = selected.value[0];
      const currentIndex = items.findIndex((i) => i.id === currentId);
      let newIndex = (currentIndex + offset) % items.length;
      let newItem = items[newIndex];
      while (newItem.disabled && newIndex !== currentIndex) {
        newIndex = (newIndex + offset) % items.length;
        newItem = items[newIndex];
      }
      if (newItem.disabled)
        return;
      selected.value = [items[newIndex].id];
    }
  }
  const state = {
    register,
    unregister,
    selected,
    select,
    disabled: toRef(props, "disabled"),
    prev: () => step(items.length - 1),
    next: () => step(1),
    isSelected: (id) => selected.value.includes(id),
    selectedClass: computed(() => props.selectedClass),
    items: computed(() => items),
    getItemIndex: (value) => getItemIndex(items, value)
  };
  provide(injectKey, state);
  return state;
}
function getItemIndex(items, value) {
  const ids = getIds(items, [value]);
  if (!ids.length)
    return -1;
  return items.findIndex((item) => item.id === ids[0]);
}
function getIds(items, modelValue) {
  const ids = [];
  modelValue.forEach((value) => {
    const item = items.find((item2) => deepEqual(value, item2.value));
    const itemByIndex = items[value];
    if ((item == null ? void 0 : item.value) != null) {
      ids.push(item.id);
    } else if (itemByIndex != null) {
      ids.push(itemByIndex.id);
    }
  });
  return ids;
}
function getValues(items, ids) {
  const values = [];
  ids.forEach((id) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    if (~itemIndex) {
      const item = items[itemIndex];
      values.push(item.value != null ? item.value : itemIndex);
    }
  });
  return values;
}

// node_modules/vuetify/lib/components/VBtnToggle/VBtnToggle.mjs
var VBtnToggleSymbol = Symbol.for("vuetify:v-btn-toggle");
var makeVBtnToggleProps = propsFactory({
  ...makeVBtnGroupProps(),
  ...makeGroupProps()
}, "VBtnToggle");
var VBtnToggle = genericComponent()({
  name: "VBtnToggle",
  props: makeVBtnToggleProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      next,
      prev,
      select,
      selected
    } = useGroup(props, VBtnToggleSymbol);
    useRender(() => {
      const [btnGroupProps] = VBtnGroup.filterProps(props);
      return createVNode(VBtnGroup, mergeProps({
        "class": ["v-btn-toggle", props.class]
      }, btnGroupProps, {
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            next,
            prev,
            select,
            selected
          })];
        }
      });
    });
    return {
      next,
      prev,
      select
    };
  }
});

// node_modules/vuetify/lib/components/VDefaultsProvider/VDefaultsProvider.mjs
var makeVDefaultsProviderProps = propsFactory({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider");
var VDefaultsProvider = genericComponent(false)({
  name: "VDefaultsProvider",
  props: makeVDefaultsProviderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      defaults,
      disabled,
      reset,
      root,
      scoped
    } = toRefs(props);
    provideDefaults(defaults, {
      reset,
      root,
      scoped,
      disabled
    });
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});

// node_modules/vuetify/lib/components/VIcon/VIcon.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VIcon/VIcon.css";

// node_modules/vuetify/lib/composables/size.mjs
var predefinedSizes = ["x-small", "small", "default", "large", "x-large"];
var makeSizeProps = propsFactory({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function useSize(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  return destructComputed(() => {
    let sizeClasses;
    let sizeStyles;
    if (includes(predefinedSizes, props.size)) {
      sizeClasses = `${name}--size-${props.size}`;
    } else if (props.size) {
      sizeStyles = {
        width: convertToUnit(props.size),
        height: convertToUnit(props.size)
      };
    }
    return {
      sizeClasses,
      sizeStyles
    };
  });
}

// node_modules/vuetify/lib/components/VIcon/VIcon.mjs
var makeVIconProps = propsFactory({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "i"
  }),
  ...makeThemeProps()
}, "VIcon");
var VIcon = genericComponent()({
  name: "VIcon",
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const slotIcon = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      iconData
    } = useIcon(computed(() => slotIcon.value || props.icon));
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      var _a, _b;
      const slotValue = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (slotValue) {
        slotIcon.value = (_b = flattenFragments(slotValue).filter((node) => node.type === Text && node.children && typeof node.children === "string")[0]) == null ? void 0 : _b.children;
      }
      return createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": ["v-icon", "notranslate", themeClasses.value, sizeClasses.value, textColorClasses.value, {
          "v-icon--clickable": !!attrs.onClick,
          "v-icon--start": props.start,
          "v-icon--end": props.end
        }, props.class],
        "style": [!sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : void 0, textColorStyles.value, props.style],
        "role": attrs.onClick ? "button" : void 0,
        "aria-hidden": !attrs.onClick
      }, {
        default: () => [slotValue]
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.css";

// node_modules/vuetify/lib/composables/intersectionObserver.mjs
function useIntersectionObserver(callback, options) {
  const intersectionRef = ref();
  const isIntersecting = shallowRef(false);
  if (SUPPORTS_INTERSECTION) {
    const observer = new IntersectionObserver((entries) => {
      callback == null ? void 0 : callback(entries, observer);
      isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
    }, options);
    onBeforeUnmount(() => {
      observer.disconnect();
    });
    watch(intersectionRef, (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }
      if (newValue)
        observer.observe(newValue);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef,
    isIntersecting
  };
}

// node_modules/vuetify/lib/components/VProgressCircular/VProgressCircular.mjs
var makeVProgressCircularProps = propsFactory({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...makeComponentProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "div"
  }),
  ...makeThemeProps()
}, "VProgressCircular");
var VProgressCircular = genericComponent()({
  name: "VProgressCircular",
  props: makeVProgressCircularProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const MAGIC_RADIUS_CONSTANT = 20;
    const CIRCUMFERENCE = 2 * Math.PI * MAGIC_RADIUS_CONSTANT;
    const root = ref();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const {
      textColorClasses: underlayColorClasses,
      textColorStyles: underlayColorStyles
    } = useTextColor(toRef(props, "bgColor"));
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const normalizedValue = computed(() => Math.max(0, Math.min(100, parseFloat(props.modelValue))));
    const width = computed(() => Number(props.width));
    const size = computed(() => {
      return sizeStyles.value ? Number(props.size) : contentRect.value ? contentRect.value.width : Math.max(width.value, 32);
    });
    const diameter = computed(() => MAGIC_RADIUS_CONSTANT / (1 - width.value / size.value) * 2);
    const strokeWidth = computed(() => width.value / size.value * diameter.value);
    const strokeDashOffset = computed(() => convertToUnit((100 - normalizedValue.value) / 100 * CIRCUMFERENCE));
    watchEffect(() => {
      intersectionRef.value = root.value;
      resizeRef.value = root.value;
    });
    useRender(() => createVNode(props.tag, {
      "ref": root,
      "class": ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!props.indeterminate,
        "v-progress-circular--visible": isIntersecting.value,
        "v-progress-circular--disable-shrink": props.indeterminate === "disable-shrink"
      }, themeClasses.value, sizeClasses.value, textColorClasses.value, props.class],
      "style": [sizeStyles.value, textColorStyles.value, props.style],
      "role": "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value
    }, {
      default: () => [createVNode("svg", {
        "style": {
          transform: `rotate(calc(-90deg + ${Number(props.rotate)}deg))`
        },
        "xmlns": "http://www.w3.org/2000/svg",
        "viewBox": `0 0 ${diameter.value} ${diameter.value}`
      }, [createVNode("circle", {
        "class": ["v-progress-circular__underlay", underlayColorClasses.value],
        "style": underlayColorStyles.value,
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": 0
      }, null), createVNode("circle", {
        "class": "v-progress-circular__overlay",
        "fill": "transparent",
        "cx": "50%",
        "cy": "50%",
        "r": MAGIC_RADIUS_CONSTANT,
        "stroke-width": strokeWidth.value,
        "stroke-dasharray": CIRCUMFERENCE,
        "stroke-dashoffset": strokeDashOffset.value
      }, null)]), slots.default && createVNode("div", {
        "class": "v-progress-circular__content"
      }, [slots.default({
        value: normalizedValue.value
      })])]
    }));
    return {};
  }
});

// node_modules/vuetify/lib/composables/dimensions.mjs
var makeDimensionProps = propsFactory({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function useDimension(props) {
  const dimensionStyles = computed(() => ({
    height: convertToUnit(props.height),
    maxHeight: convertToUnit(props.maxHeight),
    maxWidth: convertToUnit(props.maxWidth),
    minHeight: convertToUnit(props.minHeight),
    minWidth: convertToUnit(props.minWidth),
    width: convertToUnit(props.width)
  }));
  return {
    dimensionStyles
  };
}

// node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.css";

// node_modules/vuetify/lib/composables/location.mjs
var oppositeMap = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
};
var makeLocationProps = propsFactory({
  location: String
}, "location");
function useLocation(props) {
  let opposite = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  let offset = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl
  } = useRtl();
  const locationStyles = computed(() => {
    if (!props.location)
      return {};
    const {
      side,
      align
    } = parseAnchor(props.location.split(" ").length > 1 ? props.location : `${props.location} center`, isRtl.value);
    function getOffset2(side2) {
      return offset ? offset(side2) : 0;
    }
    const styles = {};
    if (side !== "center") {
      if (opposite)
        styles[oppositeMap[side]] = `calc(100% - ${getOffset2(side)}px)`;
      else
        styles[side] = 0;
    }
    if (align !== "center") {
      if (opposite)
        styles[oppositeMap[align]] = `calc(100% - ${getOffset2(align)}px)`;
      else
        styles[align] = 0;
    } else {
      if (side === "center")
        styles.top = styles.left = "50%";
      else {
        styles[{
          top: "left",
          bottom: "left",
          left: "top",
          right: "top"
        }[side]] = "50%";
      }
      styles.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[side];
    }
    return styles;
  });
  return {
    locationStyles
  };
}

// node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.mjs
var makeVProgressLinearProps = propsFactory({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: true
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...makeComponentProps(),
  ...makeLocationProps({
    location: "top"
  }),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VProgressLinear");
var VProgressLinear = genericComponent()({
  name: "VProgressLinear",
  props: makeVProgressLinearProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const progress = useProxiedModel(props, "modelValue");
    const {
      isRtl,
      rtlClasses
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(props, "color");
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(computed(() => props.bgColor || props.color));
    const {
      backgroundColorClasses: barColorClasses,
      backgroundColorStyles: barColorStyles
    } = useBackgroundColor(props, "color");
    const {
      roundedClasses
    } = useRounded(props);
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const max = computed(() => parseInt(props.max, 10));
    const height = computed(() => parseInt(props.height, 10));
    const normalizedBuffer = computed(() => parseFloat(props.bufferValue) / max.value * 100);
    const normalizedValue = computed(() => parseFloat(progress.value) / max.value * 100);
    const isReversed = computed(() => isRtl.value !== props.reverse);
    const transition = computed(() => props.indeterminate ? "fade-transition" : "slide-x-transition");
    const opacity = computed(() => {
      return props.bgOpacity == null ? props.bgOpacity : parseFloat(props.bgOpacity);
    });
    function handleClick(e) {
      if (!intersectionRef.value)
        return;
      const {
        left,
        right,
        width
      } = intersectionRef.value.getBoundingClientRect();
      const value = isReversed.value ? width - e.clientX + (right - width) : e.clientX - left;
      progress.value = Math.round(value / width * max.value);
    }
    useRender(() => createVNode(props.tag, {
      "ref": intersectionRef,
      "class": ["v-progress-linear", {
        "v-progress-linear--absolute": props.absolute,
        "v-progress-linear--active": props.active && isIntersecting.value,
        "v-progress-linear--reverse": isReversed.value,
        "v-progress-linear--rounded": props.rounded,
        "v-progress-linear--rounded-bar": props.roundedBar,
        "v-progress-linear--striped": props.striped
      }, roundedClasses.value, themeClasses.value, rtlClasses.value, props.class],
      "style": [{
        bottom: props.location === "bottom" ? 0 : void 0,
        top: props.location === "top" ? 0 : void 0,
        height: props.active ? convertToUnit(height.value) : 0,
        "--v-progress-linear-height": convertToUnit(height.value),
        ...locationStyles.value
      }, props.style],
      "role": "progressbar",
      "aria-hidden": props.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": props.max,
      "aria-valuenow": props.indeterminate ? void 0 : normalizedValue.value,
      "onClick": props.clickable && handleClick
    }, {
      default: () => [props.stream && createVNode("div", {
        "key": "stream",
        "class": ["v-progress-linear__stream", textColorClasses.value],
        "style": {
          ...textColorStyles.value,
          [isReversed.value ? "left" : "right"]: convertToUnit(-height.value),
          borderTop: `${convertToUnit(height.value / 2)} dotted`,
          opacity: opacity.value,
          top: `calc(50% - ${convertToUnit(height.value / 4)})`,
          width: convertToUnit(100 - normalizedBuffer.value, "%"),
          "--v-progress-linear-stream-to": convertToUnit(height.value * (isReversed.value ? 1 : -1))
        }
      }, null), createVNode("div", {
        "class": ["v-progress-linear__background", backgroundColorClasses.value],
        "style": [backgroundColorStyles.value, {
          opacity: opacity.value,
          width: convertToUnit(!props.stream ? 100 : normalizedBuffer.value, "%")
        }]
      }, null), createVNode(Transition, {
        "name": transition.value
      }, {
        default: () => [!props.indeterminate ? createVNode("div", {
          "class": ["v-progress-linear__determinate", barColorClasses.value],
          "style": [barColorStyles.value, {
            width: convertToUnit(normalizedValue.value, "%")
          }]
        }, null) : createVNode("div", {
          "class": "v-progress-linear__indeterminate"
        }, [["long", "short"].map((bar) => createVNode("div", {
          "key": bar,
          "class": ["v-progress-linear__indeterminate", bar, barColorClasses.value],
          "style": barColorStyles.value
        }, null))])]
      }), slots.default && createVNode("div", {
        "class": "v-progress-linear__content"
      }, [slots.default({
        value: normalizedValue.value,
        buffer: normalizedBuffer.value
      })])]
    }));
    return {};
  }
});

// node_modules/vuetify/lib/composables/loader.mjs
var makeLoaderProps = propsFactory({
  loading: [Boolean, String]
}, "loader");
function useLoader(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const loaderClasses = computed(() => ({
    [`${name}--loading`]: props.loading
  }));
  return {
    loaderClasses
  };
}
function LoaderSlot(props, _ref) {
  var _a;
  let {
    slots
  } = _ref;
  return createVNode("div", {
    "class": `${props.name}__loader`
  }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
    color: props.color,
    isActive: props.active
  })) || createVNode(VProgressLinear, {
    "active": props.active,
    "color": props.color,
    "height": "2",
    "indeterminate": true
  }, null)]);
}

// node_modules/vuetify/lib/composables/position.mjs
var positionValues = ["static", "relative", "fixed", "absolute", "sticky"];
var makePositionProps = propsFactory({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (v) => positionValues.includes(v)
    )
  }
}, "position");
function usePosition(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const positionClasses = computed(() => {
    return props.position ? `${name}--${props.position}` : void 0;
  });
  return {
    positionClasses
  };
}

// node_modules/vuetify/lib/composables/router.mjs
function useRouter() {
  var _a, _b;
  return (_b = (_a = getCurrentInstance("useRouter")) == null ? void 0 : _a.proxy) == null ? void 0 : _b.$router;
}
function useLink(props, attrs) {
  const RouterLink = resolveDynamicComponent("RouterLink");
  const isLink = computed(() => !!(props.href || props.to));
  const isClickable = computed(() => {
    return (isLink == null ? void 0 : isLink.value) || hasEvent(attrs, "click") || hasEvent(props, "click");
  });
  if (typeof RouterLink === "string") {
    return {
      isLink,
      isClickable,
      href: toRef(props, "href")
    };
  }
  const link = props.to ? RouterLink.useLink(props) : void 0;
  return {
    isLink,
    isClickable,
    route: link == null ? void 0 : link.route,
    navigate: link == null ? void 0 : link.navigate,
    isActive: link && computed(() => {
      var _a, _b;
      return props.exact ? (_a = link.isExactActive) == null ? void 0 : _a.value : (_b = link.isActive) == null ? void 0 : _b.value;
    }),
    href: computed(() => props.to ? link == null ? void 0 : link.route.value.href : props.href)
  };
}
var makeRouterProps = propsFactory({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
var inTransition = false;
function useBackButton(router, cb) {
  let popped = false;
  let removeBefore;
  let removeAfter;
  if (IN_BROWSER) {
    nextTick(() => {
      window.addEventListener("popstate", onPopstate);
      removeBefore = router == null ? void 0 : router.beforeEach((to, from, next) => {
        if (!inTransition) {
          setTimeout(() => popped ? cb(next) : next());
        } else {
          popped ? cb(next) : next();
        }
        inTransition = true;
      });
      removeAfter = router == null ? void 0 : router.afterEach(() => {
        inTransition = false;
      });
    });
    onScopeDispose(() => {
      window.removeEventListener("popstate", onPopstate);
      removeBefore == null ? void 0 : removeBefore();
      removeAfter == null ? void 0 : removeAfter();
    });
  }
  function onPopstate(e) {
    var _a;
    if ((_a = e.state) == null ? void 0 : _a.replaced)
      return;
    popped = true;
    setTimeout(() => popped = false);
  }
}

// node_modules/vuetify/lib/composables/selectLink.mjs
function useSelectLink(link, select) {
  watch(() => {
    var _a;
    return (_a = link.isActive) == null ? void 0 : _a.value;
  }, (isActive) => {
    if (link.isLink.value && isActive && select) {
      nextTick(() => {
        select(true);
      });
    }
  }, {
    immediate: true
  });
}

// node_modules/vuetify/lib/directives/ripple/index.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/directives/ripple/VRipple.css";
var stopSymbol = Symbol("rippleStop");
var DELAY_RIPPLE = 80;
function transform(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}
function isTouchEvent(e) {
  return e.constructor.name === "TouchEvent";
}
function isKeyboardEvent(e) {
  return e.constructor.name === "KeyboardEvent";
}
var calculate = function(e, el) {
  var _a;
  let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  let localX = 0;
  let localY = 0;
  if (!isKeyboardEvent(e)) {
    const offset = el.getBoundingClientRect();
    const target = isTouchEvent(e) ? e.touches[e.touches.length - 1] : e;
    localX = target.clientX - offset.left;
    localY = target.clientY - offset.top;
  }
  let radius = 0;
  let scale = 0.3;
  if ((_a = el._ripple) == null ? void 0 : _a.circle) {
    scale = 0.15;
    radius = el.clientWidth / 2;
    radius = value.center ? radius : radius + Math.sqrt((localX - radius) ** 2 + (localY - radius) ** 2) / 4;
  } else {
    radius = Math.sqrt(el.clientWidth ** 2 + el.clientHeight ** 2) / 2;
  }
  const centerX = `${(el.clientWidth - radius * 2) / 2}px`;
  const centerY = `${(el.clientHeight - radius * 2) / 2}px`;
  const x = value.center ? centerX : `${localX - radius}px`;
  const y = value.center ? centerY : `${localY - radius}px`;
  return {
    radius,
    scale,
    x,
    y,
    centerX,
    centerY
  };
};
var ripples = {
  /* eslint-disable max-statements */
  show(e, el) {
    var _a;
    let value = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled)) {
      return;
    }
    const container = document.createElement("span");
    const animation = document.createElement("span");
    container.appendChild(animation);
    container.className = "v-ripple__container";
    if (value.class) {
      container.className += ` ${value.class}`;
    }
    const {
      radius,
      scale,
      x,
      y,
      centerX,
      centerY
    } = calculate(e, el, value);
    const size = `${radius * 2}px`;
    animation.className = "v-ripple__animation";
    animation.style.width = size;
    animation.style.height = size;
    el.appendChild(container);
    const computed2 = window.getComputedStyle(el);
    if (computed2 && computed2.position === "static") {
      el.style.position = "relative";
      el.dataset.previousPosition = "static";
    }
    animation.classList.add("v-ripple__animation--enter");
    animation.classList.add("v-ripple__animation--visible");
    transform(animation, `translate(${x}, ${y}) scale3d(${scale},${scale},${scale})`);
    animation.dataset.activated = String(performance.now());
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--enter");
      animation.classList.add("v-ripple__animation--in");
      transform(animation, `translate(${centerX}, ${centerY}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(el) {
    var _a;
    if (!((_a = el == null ? void 0 : el._ripple) == null ? void 0 : _a.enabled))
      return;
    const ripples2 = el.getElementsByClassName("v-ripple__animation");
    if (ripples2.length === 0)
      return;
    const animation = ripples2[ripples2.length - 1];
    if (animation.dataset.isHiding)
      return;
    else
      animation.dataset.isHiding = "true";
    const diff = performance.now() - Number(animation.dataset.activated);
    const delay = Math.max(250 - diff, 0);
    setTimeout(() => {
      animation.classList.remove("v-ripple__animation--in");
      animation.classList.add("v-ripple__animation--out");
      setTimeout(() => {
        var _a2;
        const ripples3 = el.getElementsByClassName("v-ripple__animation");
        if (ripples3.length === 1 && el.dataset.previousPosition) {
          el.style.position = el.dataset.previousPosition;
          delete el.dataset.previousPosition;
        }
        if (((_a2 = animation.parentNode) == null ? void 0 : _a2.parentNode) === el)
          el.removeChild(animation.parentNode);
      }, 300);
    }, delay);
  }
};
function isRippleEnabled(value) {
  return typeof value === "undefined" || !!value;
}
function rippleShow(e) {
  const value = {};
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple) || element._ripple.touched || e[stopSymbol])
    return;
  e[stopSymbol] = true;
  if (isTouchEvent(e)) {
    element._ripple.touched = true;
    element._ripple.isTouch = true;
  } else {
    if (element._ripple.isTouch)
      return;
  }
  value.center = element._ripple.centered || isKeyboardEvent(e);
  if (element._ripple.class) {
    value.class = element._ripple.class;
  }
  if (isTouchEvent(e)) {
    if (element._ripple.showTimerCommit)
      return;
    element._ripple.showTimerCommit = () => {
      ripples.show(e, element, value);
    };
    element._ripple.showTimer = window.setTimeout(() => {
      var _a;
      if ((_a = element == null ? void 0 : element._ripple) == null ? void 0 : _a.showTimerCommit) {
        element._ripple.showTimerCommit();
        element._ripple.showTimerCommit = null;
      }
    }, DELAY_RIPPLE);
  } else {
    ripples.show(e, element, value);
  }
}
function rippleStop(e) {
  e[stopSymbol] = true;
}
function rippleHide(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple))
    return;
  window.clearTimeout(element._ripple.showTimer);
  if (e.type === "touchend" && element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit();
    element._ripple.showTimerCommit = null;
    element._ripple.showTimer = window.setTimeout(() => {
      rippleHide(e);
    });
    return;
  }
  window.setTimeout(() => {
    if (element._ripple) {
      element._ripple.touched = false;
    }
  });
  ripples.hide(element);
}
function rippleCancelShow(e) {
  const element = e.currentTarget;
  if (!(element == null ? void 0 : element._ripple))
    return;
  if (element._ripple.showTimerCommit) {
    element._ripple.showTimerCommit = null;
  }
  window.clearTimeout(element._ripple.showTimer);
}
var keyboardRipple = false;
function keyboardRippleShow(e) {
  if (!keyboardRipple && (e.keyCode === keyCodes.enter || e.keyCode === keyCodes.space)) {
    keyboardRipple = true;
    rippleShow(e);
  }
}
function keyboardRippleHide(e) {
  keyboardRipple = false;
  rippleHide(e);
}
function focusRippleHide(e) {
  if (keyboardRipple) {
    keyboardRipple = false;
    rippleHide(e);
  }
}
function updateRipple(el, binding, wasEnabled) {
  const {
    value,
    modifiers
  } = binding;
  const enabled = isRippleEnabled(value);
  if (!enabled) {
    ripples.hide(el);
  }
  el._ripple = el._ripple ?? {};
  el._ripple.enabled = enabled;
  el._ripple.centered = modifiers.center;
  el._ripple.circle = modifiers.circle;
  if (isObject(value) && value.class) {
    el._ripple.class = value.class;
  }
  if (enabled && !wasEnabled) {
    if (modifiers.stop) {
      el.addEventListener("touchstart", rippleStop, {
        passive: true
      });
      el.addEventListener("mousedown", rippleStop);
      return;
    }
    el.addEventListener("touchstart", rippleShow, {
      passive: true
    });
    el.addEventListener("touchend", rippleHide, {
      passive: true
    });
    el.addEventListener("touchmove", rippleCancelShow, {
      passive: true
    });
    el.addEventListener("touchcancel", rippleHide);
    el.addEventListener("mousedown", rippleShow);
    el.addEventListener("mouseup", rippleHide);
    el.addEventListener("mouseleave", rippleHide);
    el.addEventListener("keydown", keyboardRippleShow);
    el.addEventListener("keyup", keyboardRippleHide);
    el.addEventListener("blur", focusRippleHide);
    el.addEventListener("dragstart", rippleHide, {
      passive: true
    });
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}
function removeListeners(el) {
  el.removeEventListener("mousedown", rippleShow);
  el.removeEventListener("touchstart", rippleShow);
  el.removeEventListener("touchend", rippleHide);
  el.removeEventListener("touchmove", rippleCancelShow);
  el.removeEventListener("touchcancel", rippleHide);
  el.removeEventListener("mouseup", rippleHide);
  el.removeEventListener("mouseleave", rippleHide);
  el.removeEventListener("keydown", keyboardRippleShow);
  el.removeEventListener("keyup", keyboardRippleHide);
  el.removeEventListener("dragstart", rippleHide);
  el.removeEventListener("blur", focusRippleHide);
}
function mounted(el, binding) {
  updateRipple(el, binding, false);
}
function unmounted(el) {
  delete el._ripple;
  removeListeners(el);
}
function updated(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }
  const wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}
var Ripple = {
  mounted,
  unmounted,
  updated
};

// node_modules/vuetify/lib/components/VBtn/VBtn.mjs
var makeVBtnProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: VBtnToggleSymbol
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: IconValue,
  appendIcon: IconValue,
  block: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeLoaderProps(),
  ...makeLocationProps(),
  ...makePositionProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "button"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "elevated"
  })
}, "VBtn");
var VBtn = genericComponent()({
  name: "VBtn",
  directives: {
    Ripple
  },
  props: makeVBtnProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      locationStyles
    } = useLocation(props);
    const {
      positionClasses
    } = usePosition(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    const group = useGroupItem(props, props.symbol, false);
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      if (props.active !== void 0) {
        return props.active;
      }
      if (link.isLink.value) {
        return (_a = link.isActive) == null ? void 0 : _a.value;
      }
      return group == null ? void 0 : group.isSelected.value;
    });
    const isDisabled = computed(() => (group == null ? void 0 : group.disabled.value) || props.disabled);
    const isElevated = computed(() => {
      return props.variant === "elevated" && !(props.disabled || props.flat || props.border);
    });
    const valueAttr = computed(() => {
      if (props.value === void 0)
        return void 0;
      return Object(props.value) === props.value ? JSON.stringify(props.value, null, 0) : props.value;
    });
    function onClick(e) {
      var _a;
      if (isDisabled.value || link.isLink.value && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || attrs.target === "_blank"))
        return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    useSelectLink(link, group == null ? void 0 : group.select);
    useRender(() => {
      var _a, _b;
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasPrepend = !!(props.prependIcon || slots.prepend);
      const hasAppend = !!(props.appendIcon || slots.append);
      const hasIcon = !!(props.icon && props.icon !== true);
      const hasColor = (group == null ? void 0 : group.isSelected.value) && (!link.isLink.value || ((_a = link.isActive) == null ? void 0 : _a.value)) || !group || ((_b = link.isActive) == null ? void 0 : _b.value);
      return withDirectives(createVNode(Tag, {
        "type": Tag === "a" ? void 0 : "button",
        "class": ["v-btn", group == null ? void 0 : group.selectedClass.value, {
          "v-btn--active": isActive.value,
          "v-btn--block": props.block,
          "v-btn--disabled": isDisabled.value,
          "v-btn--elevated": isElevated.value,
          "v-btn--flat": props.flat,
          "v-btn--icon": !!props.icon,
          "v-btn--loading": props.loading,
          "v-btn--stacked": props.stacked
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, loaderClasses.value, positionClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, dimensionStyles.value, locationStyles.value, sizeStyles.value, props.style],
        "disabled": isDisabled.value || void 0,
        "href": link.href.value,
        "onClick": onClick,
        "value": valueAttr.value
      }, {
        default: () => {
          var _a2;
          return [genOverlays(true, "v-btn"), !props.icon && hasPrepend && createVNode("span", {
            "key": "prepend",
            "class": "v-btn__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.prependIcon,
            "defaults": {
              VIcon: {
                icon: props.prependIcon
              }
            }
          }, slots.prepend)]), createVNode("span", {
            "class": "v-btn__content",
            "data-no-activator": ""
          }, [!slots.default && hasIcon ? createVNode(VIcon, {
            "key": "content-icon",
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "content-defaults",
            "disabled": !hasIcon,
            "defaults": {
              VIcon: {
                icon: props.icon
              }
            }
          }, {
            default: () => {
              var _a3;
              return [((_a3 = slots.default) == null ? void 0 : _a3.call(slots)) ?? props.text];
            }
          })]), !props.icon && hasAppend && createVNode("span", {
            "key": "append",
            "class": "v-btn__append"
          }, [!slots.append ? createVNode(VIcon, {
            "key": "append-icon",
            "icon": props.appendIcon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !props.appendIcon,
            "defaults": {
              VIcon: {
                icon: props.appendIcon
              }
            }
          }, slots.append)]), !!props.loading && createVNode("span", {
            "key": "loader",
            "class": "v-btn__loader"
          }, [((_a2 = slots.loader) == null ? void 0 : _a2.call(slots)) ?? createVNode(VProgressCircular, {
            "color": typeof props.loading === "boolean" ? void 0 : props.loading,
            "indeterminate": true,
            "size": "23",
            "width": "2"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), !isDisabled.value && props.ripple, null]]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VSelect/VSelect.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VSelect/VSelect.css";

// node_modules/vuetify/lib/components/transitions/createTransition.mjs
var makeTransitionProps = propsFactory({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function createCssTransition(name, origin, mode) {
  return genericComponent()({
    name,
    props: makeTransitionProps({
      mode,
      origin
    }),
    setup(props, _ref) {
      let {
        slots
      } = _ref;
      const functions = {
        onBeforeEnter(el) {
          if (props.origin) {
            el.style.transformOrigin = props.origin;
          }
        },
        onLeave(el) {
          if (props.leaveAbsolute) {
            const {
              offsetTop,
              offsetLeft,
              offsetWidth,
              offsetHeight
            } = el;
            el._transitionInitialStyles = {
              position: el.style.position,
              top: el.style.top,
              left: el.style.left,
              width: el.style.width,
              height: el.style.height
            };
            el.style.position = "absolute";
            el.style.top = `${offsetTop}px`;
            el.style.left = `${offsetLeft}px`;
            el.style.width = `${offsetWidth}px`;
            el.style.height = `${offsetHeight}px`;
          }
          if (props.hideOnLeave) {
            el.style.setProperty("display", "none", "important");
          }
        },
        onAfterLeave(el) {
          if (props.leaveAbsolute && (el == null ? void 0 : el._transitionInitialStyles)) {
            const {
              position,
              top,
              left,
              width,
              height
            } = el._transitionInitialStyles;
            delete el._transitionInitialStyles;
            el.style.position = position || "";
            el.style.top = top || "";
            el.style.left = left || "";
            el.style.width = width || "";
            el.style.height = height || "";
          }
        }
      };
      return () => {
        const tag = props.group ? TransitionGroup : Transition;
        return h(tag, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          ...props.group ? void 0 : {
            mode: props.mode
          },
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}
function createJavascriptTransition(name, functions) {
  let mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return genericComponent()({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      },
      disabled: Boolean
    },
    setup(props, _ref2) {
      let {
        slots
      } = _ref2;
      return () => {
        return h(Transition, {
          name: props.disabled ? "" : name,
          css: !props.disabled,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...props.disabled ? {} : functions
        }, slots.default);
      };
    }
  });
}

// node_modules/vuetify/lib/components/transitions/expand-transition.mjs
function expand_transition_default() {
  let expandedParentClass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  const sizeProperty = x ? "width" : "height";
  const offsetProperty = camelize(`offset-${sizeProperty}`);
  return {
    onBeforeEnter(el) {
      el._parent = el.parentNode;
      el._initialStyle = {
        transition: el.style.transition,
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
    },
    onEnter(el) {
      const initialStyle = el._initialStyle;
      el.style.setProperty("transition", "none", "important");
      el.style.overflow = "hidden";
      const offset = `${el[offsetProperty]}px`;
      el.style[sizeProperty] = "0";
      void el.offsetHeight;
      el.style.transition = initialStyle.transition;
      if (expandedParentClass && el._parent) {
        el._parent.classList.add(expandedParentClass);
      }
      requestAnimationFrame(() => {
        el.style[sizeProperty] = offset;
      });
    },
    onAfterEnter: resetStyles,
    onEnterCancelled: resetStyles,
    onLeave(el) {
      el._initialStyle = {
        transition: "",
        overflow: el.style.overflow,
        [sizeProperty]: el.style[sizeProperty]
      };
      el.style.overflow = "hidden";
      el.style[sizeProperty] = `${el[offsetProperty]}px`;
      void el.offsetHeight;
      requestAnimationFrame(() => el.style[sizeProperty] = "0");
    },
    onAfterLeave,
    onLeaveCancelled: onAfterLeave
  };
  function onAfterLeave(el) {
    if (expandedParentClass && el._parent) {
      el._parent.classList.remove(expandedParentClass);
    }
    resetStyles(el);
  }
  function resetStyles(el) {
    const size = el._initialStyle[sizeProperty];
    el.style.overflow = el._initialStyle.overflow;
    if (size != null)
      el.style[sizeProperty] = size;
    delete el._initialStyle;
  }
}

// node_modules/vuetify/lib/components/transitions/dialog-transition.mjs
var makeVDialogTransitionProps = propsFactory({
  target: Object
}, "v-dialog-transition");
var VDialogTransition = genericComponent()({
  name: "VDialogTransition",
  props: makeVDialogTransitionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
      },
      async onEnter(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
        el.style.visibility = "";
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }, {}], {
          duration: 225 * speed,
          easing: deceleratedEasing
        });
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * speed,
            easing: standardEasing
          });
        });
        animation.finished.then(() => done());
      },
      onAfterEnter(el) {
        el.style.removeProperty("pointer-events");
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = "none";
      },
      async onLeave(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{}, {
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }], {
          duration: 125 * speed,
          easing: acceleratedEasing
        });
        animation.finished.then(() => done());
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * speed,
            easing: standardEasing
          });
        });
      },
      onAfterLeave(el) {
        el.style.removeProperty("pointer-events");
      }
    };
    return () => {
      return props.target ? createVNode(Transition, mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : createVNode(Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});
function getChildren(el) {
  var _a;
  const els = (_a = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = target.getBoundingClientRect();
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === "left" || anchorOffset === "left") {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === "right" || anchorOffset === "right") {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === "top" || anchorOffset === "top") {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;
  const asa = elBox.width * elBox.height / (window.innerWidth * window.innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}

// node_modules/vuetify/lib/components/transitions/index.mjs
var VFabTransition = createCssTransition("fab-transition", "center center", "out-in");
var VDialogBottomTransition = createCssTransition("dialog-bottom-transition");
var VDialogTopTransition = createCssTransition("dialog-top-transition");
var VFadeTransition = createCssTransition("fade-transition");
var VScaleTransition = createCssTransition("scale-transition");
var VScrollXTransition = createCssTransition("scroll-x-transition");
var VScrollXReverseTransition = createCssTransition("scroll-x-reverse-transition");
var VScrollYTransition = createCssTransition("scroll-y-transition");
var VScrollYReverseTransition = createCssTransition("scroll-y-reverse-transition");
var VSlideXTransition = createCssTransition("slide-x-transition");
var VSlideXReverseTransition = createCssTransition("slide-x-reverse-transition");
var VSlideYTransition = createCssTransition("slide-y-transition");
var VSlideYReverseTransition = createCssTransition("slide-y-reverse-transition");
var VExpandTransition = createJavascriptTransition("expand-transition", expand_transition_default());
var VExpandXTransition = createJavascriptTransition("expand-x-transition", expand_transition_default("", true));

// node_modules/vuetify/lib/components/VCheckbox/VCheckbox.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VCheckbox/VCheckbox.css";

// node_modules/vuetify/lib/components/VSelectionControl/VSelectionControl.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VSelectionControl/VSelectionControl.css";

// node_modules/vuetify/lib/components/VLabel/VLabel.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VLabel/VLabel.css";
var makeVLabelProps = propsFactory({
  text: String,
  clickable: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
var VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("label", {
        "class": ["v-label", {
          "v-label--clickable": props.clickable
        }, props.class],
        "style": props.style
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VSelectionControlGroup/VSelectionControlGroup.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VSelectionControlGroup/VSelectionControlGroup.css";
var VSelectionControlGroupSymbol = Symbol.for("vuetify:selection-control-group");
var makeSelectionControlGroupProps = propsFactory({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: Boolean,
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeThemeProps()
}, "SelectionControlGroup");
var makeVSelectionControlGroupProps = propsFactory({
  ...makeSelectionControlGroupProps({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
var VSelectionControlGroup = genericComponent()({
  name: "VSelectionControlGroup",
  props: makeVSelectionControlGroupProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const modelValue = useProxiedModel(props, "modelValue");
    const uid = getUid();
    const id = computed(() => props.id || `v-selection-control-group-${uid}`);
    const name = computed(() => props.name || id.value);
    const updateHandlers = /* @__PURE__ */ new Set();
    provide(VSelectionControlGroupSymbol, {
      modelValue,
      forceUpdate: () => {
        updateHandlers.forEach((fn) => fn());
      },
      onForceUpdate: (cb) => {
        updateHandlers.add(cb);
        onScopeDispose(() => {
          updateHandlers.delete(cb);
        });
      }
    });
    provideDefaults({
      [props.defaultsTarget]: {
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled"),
        density: toRef(props, "density"),
        error: toRef(props, "error"),
        inline: toRef(props, "inline"),
        modelValue,
        multiple: computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
        name,
        falseIcon: toRef(props, "falseIcon"),
        trueIcon: toRef(props, "trueIcon"),
        readonly: toRef(props, "readonly"),
        ripple: toRef(props, "ripple"),
        type: toRef(props, "type"),
        valueComparator: toRef(props, "valueComparator")
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-selection-control-group", {
          "v-selection-control-group--inline": props.inline
        }, props.class],
        "style": props.style,
        "role": props.type === "radio" ? "radiogroup" : void 0
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VSelectionControl/VSelectionControl.mjs
var makeVSelectionControlProps = propsFactory({
  label: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...makeComponentProps(),
  ...makeSelectionControlGroupProps()
}, "VSelectionControl");
function useSelectionControl(props) {
  const group = inject(VSelectionControlGroupSymbol, void 0);
  const {
    densityClasses
  } = useDensity(props);
  const modelValue = useProxiedModel(props, "modelValue");
  const trueValue = computed(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
  const falseValue = computed(() => props.falseValue !== void 0 ? props.falseValue : false);
  const isMultiple = computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
  const model = computed({
    get() {
      const val = group ? group.modelValue.value : modelValue.value;
      return isMultiple.value ? val.some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
    },
    set(val) {
      if (props.readonly)
        return;
      const currentValue = val ? trueValue.value : falseValue.value;
      let newVal = currentValue;
      if (isMultiple.value) {
        newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
      }
      if (group) {
        group.modelValue.value = newVal;
      } else {
        modelValue.value = newVal;
      }
    }
  });
  const {
    textColorClasses,
    textColorStyles
  } = useTextColor(computed(() => {
    return model.value && !props.error && !props.disabled ? props.color : void 0;
  }));
  const {
    backgroundColorClasses,
    backgroundColorStyles
  } = useBackgroundColor(computed(() => {
    return model.value && !props.error && !props.disabled ? props.color : void 0;
  }));
  const icon = computed(() => model.value ? props.trueIcon : props.falseIcon);
  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    backgroundColorClasses,
    backgroundColorStyles,
    icon
  };
}
var VSelectionControl = genericComponent()({
  name: "VSelectionControl",
  directives: {
    Ripple
  },
  inheritAttrs: false,
  props: makeVSelectionControlProps(),
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      group,
      densityClasses,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      backgroundColorClasses,
      backgroundColorStyles,
      trueValue
    } = useSelectionControl(props);
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const isFocused = shallowRef(false);
    const isFocusVisible = shallowRef(false);
    const input = ref();
    group == null ? void 0 : group.onForceUpdate(() => {
      if (input.value) {
        input.value.checked = model.value;
      }
    });
    function onFocus(e) {
      isFocused.value = true;
      if (matchesSelector(e.target, ":focus-visible") !== false) {
        isFocusVisible.value = true;
      }
    }
    function onBlur() {
      isFocused.value = false;
      isFocusVisible.value = false;
    }
    function onInput(e) {
      if (props.readonly && group) {
        nextTick(() => group.forceUpdate());
      }
      model.value = e.target.checked;
    }
    useRender(() => {
      var _a, _b;
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const inputNode = createVNode("input", mergeProps({
        "ref": input,
        "checked": model.value,
        "disabled": !!(props.readonly || props.disabled),
        "id": id.value,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onInput": onInput,
        "aria-disabled": !!(props.readonly || props.disabled),
        "type": props.type,
        "value": trueValue.value,
        "name": props.name,
        "aria-checked": props.type === "checkbox" ? model.value : void 0
      }, inputAttrs), null);
      return createVNode("div", mergeProps({
        "class": ["v-selection-control", {
          "v-selection-control--dirty": model.value,
          "v-selection-control--disabled": props.disabled,
          "v-selection-control--error": props.error,
          "v-selection-control--focused": isFocused.value,
          "v-selection-control--focus-visible": isFocusVisible.value,
          "v-selection-control--inline": props.inline
        }, densityClasses.value, props.class]
      }, rootAttrs, {
        "style": props.style
      }), [createVNode("div", {
        "class": ["v-selection-control__wrapper", textColorClasses.value],
        "style": textColorStyles.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        backgroundColorClasses,
        backgroundColorStyles
      }), withDirectives(createVNode("div", {
        "class": ["v-selection-control__input"]
      }, [((_b = slots.input) == null ? void 0 : _b.call(slots, {
        model,
        textColorClasses,
        textColorStyles,
        backgroundColorClasses,
        backgroundColorStyles,
        inputNode,
        icon: icon.value,
        props: {
          onFocus,
          onBlur,
          id: id.value
        }
      })) ?? createVNode(Fragment, null, [icon.value && createVNode(VIcon, {
        "key": "icon",
        "icon": icon.value
      }, null), inputNode])]), [[resolveDirective("ripple"), props.ripple && [!props.disabled && !props.readonly, null, ["center", "circle"]]]])]), label && createVNode(VLabel, {
        "for": id.value,
        "clickable": true,
        "onClick": (e) => e.stopPropagation()
      }, {
        default: () => [label]
      })]);
    });
    return {
      isFocused,
      input
    };
  }
});

// node_modules/vuetify/lib/components/VCheckbox/VCheckboxBtn.mjs
var makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: "$checkboxIndeterminate"
  },
  ...makeVSelectionControlProps({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn");
var VCheckboxBtn = genericComponent()({
  name: "VCheckboxBtn",
  props: makeVCheckboxBtnProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:indeterminate": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    const falseIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => {
      const controlProps = omit(VSelectionControl.filterProps(props)[0], ["modelValue"]);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onChange],
        "class": ["v-checkbox-btn", props.class],
        "style": props.style,
        "type": "checkbox",
        "falseIcon": falseIcon.value,
        "trueIcon": trueIcon.value,
        "aria-checked": indeterminate.value ? "mixed" : void 0
      }), slots);
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VInput/VInput.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VInput/VInput.css";

// node_modules/vuetify/lib/components/VInput/InputIcon.mjs
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    let {
      name
    } = _ref;
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
    return createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener
    }, null);
  }
  return {
    InputIcon
  };
}

// node_modules/vuetify/lib/components/VMessages/VMessages.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VMessages/VMessages.css";

// node_modules/vuetify/lib/composables/transition.mjs
var makeTransitionProps2 = propsFactory({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (val) => val !== true
  }
}, "transition");
var MaybeTransition = (props, _ref) => {
  let {
    slots
  } = _ref;
  const {
    transition,
    disabled,
    ...rest
  } = props;
  const {
    component = Transition,
    ...customProps
  } = typeof transition === "object" ? transition : {};
  return h(component, mergeProps(typeof transition === "string" ? {
    name: disabled ? "" : transition
  } : customProps, rest, {
    disabled
  }), slots);
};

// node_modules/vuetify/lib/components/VMessages/VMessages.mjs
var makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps2({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, "VMessages");
var VMessages = genericComponent()({
  name: "VMessages",
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => props.color));
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": ["v-messages", textColorClasses.value, props.class],
      "style": [textColorStyles.value, props.style],
      "role": "alert",
      "aria-live": "polite"
    }, {
      default: () => [props.active && messages.value.map((message, i) => createVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});

// node_modules/vuetify/lib/composables/focus.mjs
var makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = computed(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}

// node_modules/vuetify/lib/composables/form.mjs
var FormKey = Symbol.for("vuetify:form");
var makeFormProps = propsFactory({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function useForm() {
  return inject(FormKey, null);
}

// node_modules/vuetify/lib/composables/validation.mjs
var makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getUid();
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm();
  const internalErrorMessages = ref([]);
  const isPristine = shallowRef(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const isDisabled = computed(() => !!(props.disabled ?? (form == null ? void 0 : form.isDisabled.value)));
  const isReadonly = computed(() => !!(props.readonly ?? (form == null ? void 0 : form.isReadonly.value)));
  const errorMessages = computed(() => {
    return props.errorMessages.length ? wrapInArray(props.errorMessages).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
  });
  const validateOn = computed(() => {
    let value = (props.validateOn ?? (form == null ? void 0 : form.validateOn.value)) || "input";
    if (value === "lazy")
      value = "input lazy";
    const set = new Set((value == null ? void 0 : value.split(" ")) ?? []);
    return {
      blur: set.has("blur") || set.has("input"),
      input: set.has("input"),
      submit: set.has("submit"),
      lazy: set.has("lazy")
    };
  });
  const isValid = computed(() => {
    if (props.error || props.errorMessages.length)
      return false;
    if (!props.rules.length)
      return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = shallowRef(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: isDisabled.value,
      [`${name}--readonly`]: isReadonly.value
    };
  });
  const uid = computed(() => props.name ?? unref(id));
  onBeforeMount(() => {
    form == null ? void 0 : form.register({
      id: uid.value,
      validate,
      reset,
      resetValidation
    });
  });
  onBeforeUnmount(() => {
    form == null ? void 0 : form.unregister(uid.value);
  });
  onMounted(async () => {
    if (!validateOn.value.lazy) {
      await validate(true);
    }
    form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value);
  });
  useToggleScope(() => validateOn.value.input, () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val)
            validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    watch(() => props.focused, (val) => {
      if (!val)
        validate();
    });
  });
  watch(isValid, () => {
    form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value);
  });
  function reset() {
    model.value = null;
    nextTick(resetValidation);
  }
  function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      validate(true);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate() {
    let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= +(props.maxErrors ?? 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true)
        continue;
      if (result !== false && typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result || "");
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled,
    isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}

// node_modules/vuetify/lib/components/VInput/VInput.mjs
var makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  centerAffix: {
    type: Boolean,
    default: true
  },
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeValidationProps()
}, "VInput");
var VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const messages = computed(() => {
      var _a;
      if (((_a = props.errorMessages) == null ? void 0 : _a.length) || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      var _a, _b, _c, _d;
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
      return createVNode("div", {
        "class": ["v-input", `v-input--${props.direction}`, {
          "v-input--center-affix": props.centerAffix
        }, densityClasses.value, rtlClasses.value, validationClasses.value, props.class],
        "style": props.style
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend"
      }, null)]), slots.default && createVNode("div", {
        "class": "v-input__control"
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append"
      }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && createVNode("div", {
        "class": "v-input__details"
      }, [createVNode(VMessages, {
        "id": messagesId.value,
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate
    };
  }
});

// node_modules/vuetify/lib/components/VCheckbox/VCheckbox.mjs
var makeVCheckboxProps = propsFactory({
  ...makeVInputProps(),
  ...omit(makeVCheckboxBtnProps(), ["inline"])
}, "VCheckbox");
var VCheckbox = genericComponent()({
  name: "VCheckbox",
  inheritAttrs: false,
  props: makeVCheckboxProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:focused": (focused) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const uid = getUid();
    const id = computed(() => props.id || `checkbox-${uid}`);
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const [inputProps, _1] = VInput.filterProps(props);
      const [checkboxProps, _2] = VCheckboxBtn.filterProps(props);
      return createVNode(VInput, mergeProps({
        "class": ["v-checkbox", props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "id": id.value,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id: id2,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return createVNode(VCheckboxBtn, mergeProps(checkboxProps, {
            "id": id2.value,
            "aria-describedby": messagesId.value,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": ($event) => model.value = $event,
            "onFocus": focus,
            "onBlur": blur
          }), slots);
        }
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VChip/VChip.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VChip/VChip.css";

// node_modules/vuetify/lib/components/VAvatar/VAvatar.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VAvatar/VAvatar.css";

// node_modules/vuetify/lib/components/VImg/VImg.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VImg/VImg.css";

// node_modules/vuetify/lib/components/VResponsive/VResponsive.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VResponsive/VResponsive.css";
function useAspectStyles(props) {
  return {
    aspectStyles: computed(() => {
      const ratio = Number(props.aspectRatio);
      return ratio ? {
        paddingBottom: String(1 / ratio * 100) + "%"
      } : void 0;
    })
  };
}
var makeVResponsiveProps = propsFactory({
  aspectRatio: [String, Number],
  contentClass: String,
  inline: Boolean,
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VResponsive");
var VResponsive = genericComponent()({
  name: "VResponsive",
  props: makeVResponsiveProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      aspectStyles
    } = useAspectStyles(props);
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-responsive", {
          "v-responsive--inline": props.inline
        }, props.class],
        "style": [dimensionStyles.value, props.style]
      }, [createVNode("div", {
        "class": "v-responsive__sizer",
        "style": aspectStyles.value
      }, null), (_a = slots.additional) == null ? void 0 : _a.call(slots), slots.default && createVNode("div", {
        "class": ["v-responsive__content", props.contentClass]
      }, [slots.default()])]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/directives/intersect/index.mjs
function mounted2(el, binding) {
  if (!SUPPORTS_INTERSECTION)
    return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === "object" ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver(function() {
    var _a;
    let entries = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    let observer2 = arguments.length > 1 ? arguments[1] : void 0;
    const _observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
    if (!_observe)
      return;
    const isIntersecting = entries.some((entry) => entry.isIntersecting);
    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(isIntersecting, entries, observer2);
    }
    if (isIntersecting && modifiers.once)
      unmounted2(el, binding);
    else
      _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[binding.instance.$.uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}
function unmounted2(el, binding) {
  var _a;
  const observe = (_a = el._observe) == null ? void 0 : _a[binding.instance.$.uid];
  if (!observe)
    return;
  observe.observer.unobserve(el);
  delete el._observe[binding.instance.$.uid];
}
var Intersect = {
  mounted: mounted2,
  unmounted: unmounted2
};
var intersect_default = Intersect;

// node_modules/vuetify/lib/components/VImg/VImg.mjs
var makeVImgProps = propsFactory({
  alt: String,
  cover: Boolean,
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  srcset: String,
  ...makeVResponsiveProps(),
  ...makeComponentProps(),
  ...makeTransitionProps2()
}, "VImg");
var VImg = genericComponent()({
  name: "VImg",
  directives: {
    intersect: intersect_default
  },
  props: makeVImgProps(),
  emits: {
    loadstart: (value) => true,
    load: (value) => true,
    error: (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const currentSrc = shallowRef("");
    const image = ref();
    const state = shallowRef(props.eager ? "loading" : "idle");
    const naturalWidth = shallowRef();
    const naturalHeight = shallowRef();
    const normalisedSrc = computed(() => {
      return props.src && typeof props.src === "object" ? {
        src: props.src.src,
        srcset: props.srcset || props.src.srcset,
        lazySrc: props.lazySrc || props.src.lazySrc,
        aspect: Number(props.aspectRatio || props.src.aspect || 0)
      } : {
        src: props.src,
        srcset: props.srcset,
        lazySrc: props.lazySrc,
        aspect: Number(props.aspectRatio || 0)
      };
    });
    const aspectRatio = computed(() => {
      return normalisedSrc.value.aspect || naturalWidth.value / naturalHeight.value || 0;
    });
    watch(() => props.src, () => {
      init(state.value !== "idle");
    });
    watch(aspectRatio, (val, oldVal) => {
      if (!val && oldVal && image.value) {
        pollForSize(image.value);
      }
    });
    onBeforeMount(() => init());
    function init(isIntersecting) {
      if (props.eager && isIntersecting)
        return;
      if (SUPPORTS_INTERSECTION && !isIntersecting && !props.eager)
        return;
      state.value = "loading";
      if (normalisedSrc.value.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = normalisedSrc.value.lazySrc;
        pollForSize(lazyImg, null);
      }
      if (!normalisedSrc.value.src)
        return;
      nextTick(() => {
        var _a, _b;
        emit("loadstart", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
        if ((_b = image.value) == null ? void 0 : _b.complete) {
          if (!image.value.naturalWidth) {
            onError();
          }
          if (state.value === "error")
            return;
          if (!aspectRatio.value)
            pollForSize(image.value, null);
          onLoad();
        } else {
          if (!aspectRatio.value)
            pollForSize(image.value);
          getSrc();
        }
      });
    }
    function onLoad() {
      var _a;
      getSrc();
      state.value = "loaded";
      emit("load", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function onError() {
      var _a;
      state.value = "error";
      emit("error", ((_a = image.value) == null ? void 0 : _a.currentSrc) || normalisedSrc.value.src);
    }
    function getSrc() {
      const img = image.value;
      if (img)
        currentSrc.value = img.currentSrc || img.src;
    }
    let timer = -1;
    function pollForSize(img) {
      let timeout = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const poll = () => {
        clearTimeout(timer);
        const {
          naturalHeight: imgHeight,
          naturalWidth: imgWidth
        } = img;
        if (imgHeight || imgWidth) {
          naturalWidth.value = imgWidth;
          naturalHeight.value = imgHeight;
        } else if (!img.complete && state.value === "loading" && timeout != null) {
          timer = window.setTimeout(poll, timeout);
        } else if (img.currentSrc.endsWith(".svg") || img.currentSrc.startsWith("data:image/svg+xml")) {
          naturalWidth.value = 1;
          naturalHeight.value = 1;
        }
      };
      poll();
    }
    const containClasses = computed(() => ({
      "v-img__img--cover": props.cover,
      "v-img__img--contain": !props.cover
    }));
    const __image = () => {
      var _a;
      if (!normalisedSrc.value.src || state.value === "idle")
        return null;
      const img = createVNode("img", {
        "class": ["v-img__img", containClasses.value],
        "src": normalisedSrc.value.src,
        "srcset": normalisedSrc.value.srcset,
        "alt": props.alt,
        "sizes": props.sizes,
        "ref": image,
        "onLoad": onLoad,
        "onError": onError
      }, null);
      const sources = (_a = slots.sources) == null ? void 0 : _a.call(slots);
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [withDirectives(sources ? createVNode("picture", {
          "class": "v-img__picture"
        }, [sources, img]) : img, [[vShow, state.value === "loaded"]])]
      });
    };
    const __preloadImage = () => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [normalisedSrc.value.lazySrc && state.value !== "loaded" && createVNode("img", {
        "class": ["v-img__img", "v-img__img--preload", containClasses.value],
        "src": normalisedSrc.value.lazySrc,
        "alt": props.alt
      }, null)]
    });
    const __placeholder = () => {
      if (!slots.placeholder)
        return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [(state.value === "loading" || state.value === "error" && !slots.error) && createVNode("div", {
          "class": "v-img__placeholder"
        }, [slots.placeholder()])]
      });
    };
    const __error = () => {
      if (!slots.error)
        return null;
      return createVNode(MaybeTransition, {
        "transition": props.transition,
        "appear": true
      }, {
        default: () => [state.value === "error" && createVNode("div", {
          "class": "v-img__error"
        }, [slots.error()])]
      });
    };
    const __gradient = () => {
      if (!props.gradient)
        return null;
      return createVNode("div", {
        "class": "v-img__gradient",
        "style": {
          backgroundImage: `linear-gradient(${props.gradient})`
        }
      }, null);
    };
    const isBooted = shallowRef(false);
    {
      const stop = watch(aspectRatio, (val) => {
        if (val) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              isBooted.value = true;
            });
          });
          stop();
        }
      });
    }
    useRender(() => {
      const [responsiveProps] = VResponsive.filterProps(props);
      return withDirectives(createVNode(VResponsive, mergeProps({
        "class": ["v-img", {
          "v-img--booting": !isBooted.value
        }, props.class],
        "style": [{
          width: convertToUnit(props.width === "auto" ? naturalWidth.value : props.width)
        }, props.style]
      }, responsiveProps, {
        "aspectRatio": aspectRatio.value,
        "aria-label": props.alt,
        "role": props.alt ? "img" : void 0
      }), {
        additional: () => createVNode(Fragment, null, [createVNode(__image, null, null), createVNode(__preloadImage, null, null), createVNode(__gradient, null, null), createVNode(__placeholder, null, null), createVNode(__error, null, null)]),
        default: slots.default
      }), [[resolveDirective("intersect"), {
        handler: init,
        options: props.options
      }, null, {
        once: true
      }]]);
    });
    return {
      currentSrc,
      image,
      state,
      naturalWidth,
      naturalHeight
    };
  }
});

// node_modules/vuetify/lib/components/VAvatar/VAvatar.mjs
var makeVAvatarProps = propsFactory({
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  image: String,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "flat"
  })
}, "VAvatar");
var VAvatar = genericComponent()({
  name: "VAvatar",
  props: makeVAvatarProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses,
      sizeStyles
    } = useSize(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-avatar", {
        "v-avatar--start": props.start,
        "v-avatar--end": props.end
      }, themeClasses.value, colorClasses.value, densityClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, props.class],
      "style": [colorStyles.value, sizeStyles.value, props.style]
    }, {
      default: () => {
        var _a;
        return [props.image ? createVNode(VImg, {
          "key": "image",
          "src": props.image,
          "alt": "",
          "cover": true
        }, null) : props.icon ? createVNode(VIcon, {
          "key": "icon",
          "icon": props.icon
        }, null) : (_a = slots.default) == null ? void 0 : _a.call(slots), genOverlays(false, "v-avatar")];
      }
    }));
    return {};
  }
});

// node_modules/vuetify/lib/components/VChipGroup/VChipGroup.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VChipGroup/VChipGroup.css";
var VChipGroupSymbol = Symbol.for("vuetify:v-chip-group");
var makeVChipGroupProps = propsFactory({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeComponentProps(),
  ...makeGroupProps({
    selectedClass: "v-chip--selected"
  }),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChipGroup");
var VChipGroup = genericComponent()({
  name: "VChipGroup",
  props: makeVChipGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isSelected,
      select,
      next,
      prev,
      selected
    } = useGroup(props, VChipGroupSymbol);
    provideDefaults({
      VChip: {
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled"),
        filter: toRef(props, "filter"),
        variant: toRef(props, "variant")
      }
    });
    useRender(() => createVNode(props.tag, {
      "class": ["v-chip-group", {
        "v-chip-group--column": props.column
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          isSelected,
          select,
          next,
          prev,
          selected: selected.value
        })];
      }
    }));
    return {};
  }
});

// node_modules/vuetify/lib/components/VChip/VChip.mjs
var makeVChipProps = propsFactory({
  activeClass: String,
  appendAvatar: String,
  appendIcon: IconValue,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "span"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChip");
var VChip = genericComponent()({
  name: "VChip",
  directives: {
    Ripple
  },
  props: makeVChipProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true,
    "group:selected": (val) => true,
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      sizeClasses
    } = useSize(props);
    const {
      themeClasses
    } = provideTheme(props);
    const isActive = useProxiedModel(props, "modelValue");
    const group = useGroupItem(props, VChipGroupSymbol, false);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        e.stopPropagation();
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    function onClick(e) {
      var _a;
      emit("click", e);
      if (!isClickable.value)
        return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    return () => {
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasClose = !!(slots.close || props.closable);
      const hasFilter = !!(slots.filter || props.filter) && group;
      const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasColor = !group || group.isSelected.value;
      return isActive.value && withDirectives(createVNode(Tag, {
        "class": ["v-chip", {
          "v-chip--disabled": props.disabled,
          "v-chip--label": props.label,
          "v-chip--link": isClickable.value,
          "v-chip--filter": hasFilter,
          "v-chip--pill": props.pill
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, group == null ? void 0 : group.selectedClass.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, props.style],
        "disabled": props.disabled || void 0,
        "draggable": props.draggable,
        "href": link.href.value,
        "tabindex": isClickable.value ? 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => {
          var _a;
          return [genOverlays(isClickable.value, "v-chip"), hasFilter && createVNode(VExpandXTransition, {
            "key": "filter"
          }, {
            default: () => [withDirectives(createVNode("div", {
              "class": "v-chip__filter"
            }, [!slots.filter ? createVNode(VIcon, {
              "key": "filter-icon",
              "icon": props.filterIcon
            }, null) : createVNode(VDefaultsProvider, {
              "key": "filter-defaults",
              "disabled": !props.filterIcon,
              "defaults": {
                VIcon: {
                  icon: props.filterIcon
                }
              }
            }, slots.filter)]), [[vShow, group.isSelected.value]])]
          }), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-chip__prepend"
          }, [!slots.prepend ? createVNode(Fragment, null, [props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon,
            "start": true
          }, null), props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "image": props.prependAvatar,
            "start": true
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                image: props.prependAvatar,
                start: true
              },
              VIcon: {
                icon: props.prependIcon,
                start: true
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-chip__content"
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected: group == null ? void 0 : group.isSelected.value,
            selectedClass: group == null ? void 0 : group.selectedClass.value,
            select: group == null ? void 0 : group.select,
            toggle: group == null ? void 0 : group.toggle,
            value: group == null ? void 0 : group.value.value,
            disabled: props.disabled
          })) ?? props.text]), hasAppend && createVNode("div", {
            "key": "append",
            "class": "v-chip__append"
          }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "end": true,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "end": true,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                end: true,
                image: props.appendAvatar
              },
              VIcon: {
                end: true,
                icon: props.appendIcon
              }
            }
          }, slots.append)]), hasClose && createVNode("div", mergeProps({
            "key": "close",
            "class": "v-chip__close"
          }, closeProps.value), [!slots.close ? createVNode(VIcon, {
            "key": "close-icon",
            "icon": props.closeIcon,
            "size": "x-small"
          }, null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VIcon: {
                icon: props.closeIcon,
                size: "x-small"
              }
            }
          }, slots.close)])];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple, null]]);
    };
  }
});

// node_modules/vuetify/lib/components/VList/VList.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VList/VList.css";

// node_modules/vuetify/lib/components/VList/list.mjs
var DepthKey = Symbol.for("vuetify:depth");
var ListKey = Symbol.for("vuetify:list");
function createList() {
  const parent = inject(ListKey, {
    hasPrepend: shallowRef(false),
    updateHasPrepend: () => null
  });
  const data = {
    hasPrepend: shallowRef(false),
    updateHasPrepend: (value) => {
      if (value)
        data.hasPrepend.value = value;
    }
  };
  provide(ListKey, data);
  return parent;
}
function useList() {
  return inject(ListKey, null);
}

// node_modules/vuetify/lib/composables/nested/openStrategies.mjs
var singleOpenStrategy = {
  open: (_ref) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref;
    if (value) {
      const newOpened = /* @__PURE__ */ new Set();
      newOpened.add(id);
      let parent = parents.get(id);
      while (parent != null) {
        newOpened.add(parent);
        parent = parents.get(parent);
      }
      return newOpened;
    } else {
      opened.delete(id);
      return opened;
    }
  },
  select: () => null
};
var multipleOpenStrategy = {
  open: (_ref2) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref2;
    if (value) {
      let parent = parents.get(id);
      opened.add(id);
      while (parent != null && parent !== id) {
        opened.add(parent);
        parent = parents.get(parent);
      }
      return opened;
    } else {
      opened.delete(id);
    }
    return opened;
  },
  select: () => null
};
var listOpenStrategy = {
  open: multipleOpenStrategy.open,
  select: (_ref3) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref3;
    if (!value)
      return opened;
    const path = [];
    let parent = parents.get(id);
    while (parent != null) {
      path.push(parent);
      parent = parents.get(parent);
    }
    return new Set(path);
  }
};

// node_modules/vuetify/lib/composables/nested/selectStrategies.mjs
var independentSelectStrategy = (mandatory) => {
  const strategy = {
    select: (_ref) => {
      let {
        id,
        value,
        selected
      } = _ref;
      id = toRaw(id);
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref2) => {
          let [key, value2] = _ref2;
          return value2 === "on" ? [...arr, key] : arr;
        }, []);
        if (on.length === 1 && on[0] === id)
          return selected;
      }
      selected.set(id, value ? "on" : "off");
      return selected;
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: (v) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on")
          arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
var independentSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: (_ref3) => {
      let {
        selected,
        id,
        ...rest
      } = _ref3;
      id = toRaw(id);
      const singleSelected = selected.has(id) ? /* @__PURE__ */ new Map([[id, selected.get(id)]]) : /* @__PURE__ */ new Map();
      return parentStrategy.select({
        ...rest,
        id,
        selected: singleSelected
      });
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      if (v == null ? void 0 : v.length) {
        map = parentStrategy.in(v.slice(0, 1), children, parents);
      }
      return map;
    },
    out: (v, children, parents) => {
      return parentStrategy.out(v, children, parents);
    }
  };
  return strategy;
};
var leafSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: (_ref4) => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref4;
      id = toRaw(id);
      if (children.has(id))
        return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
var leafSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSingleSelectStrategy(mandatory);
  const strategy = {
    select: (_ref5) => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref5;
      id = toRaw(id);
      if (children.has(id))
        return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
var classicSelectStrategy = (mandatory) => {
  const strategy = {
    select: (_ref6) => {
      let {
        id,
        value,
        selected,
        children,
        parents
      } = _ref6;
      id = toRaw(id);
      const original = new Map(selected);
      const items = [id];
      while (items.length) {
        const item = items.shift();
        selected.set(item, value ? "on" : "off");
        if (children.has(item)) {
          items.push(...children.get(item));
        }
      }
      let parent = parents.get(id);
      while (parent) {
        const childrenIds = children.get(parent);
        const everySelected = childrenIds.every((cid) => selected.get(cid) === "on");
        const noneSelected = childrenIds.every((cid) => !selected.has(cid) || selected.get(cid) === "off");
        selected.set(parent, everySelected ? "on" : noneSelected ? "off" : "indeterminate");
        parent = parents.get(parent);
      }
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref7) => {
          let [key, value2] = _ref7;
          return value2 === "on" ? [...arr, key] : arr;
        }, []);
        if (on.length === 0)
          return original;
      }
      return selected;
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: (v, children) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on" && !children.has(key))
          arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};

// node_modules/vuetify/lib/composables/nested/nested.mjs
var VNestedSymbol = Symbol.for("vuetify:nested");
var emptyNested = {
  id: shallowRef(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: ref(/* @__PURE__ */ new Map()),
    children: ref(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: ref(/* @__PURE__ */ new Set()),
    selected: ref(/* @__PURE__ */ new Map()),
    selectedValues: ref([])
  }
};
var makeNestedProps = propsFactory({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested");
var useNested = (props) => {
  let isUnmounted = false;
  const children = ref(/* @__PURE__ */ new Map());
  const parents = ref(/* @__PURE__ */ new Map());
  const opened = useProxiedModel(props, "opened", props.opened, (v) => new Set(v), (v) => [...v.values()]);
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object")
      return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single-leaf":
        return leafSingleSelectStrategy(props.mandatory);
      case "leaf":
        return leafSelectStrategy(props.mandatory);
      case "independent":
        return independentSelectStrategy(props.mandatory);
      case "single-independent":
        return independentSingleSelectStrategy(props.mandatory);
      case "classic":
      default:
        return classicSelectStrategy(props.mandatory);
    }
  });
  const openStrategy = computed(() => {
    if (typeof props.openStrategy === "object")
      return props.openStrategy;
    switch (props.openStrategy) {
      case "list":
        return listOpenStrategy;
      case "single":
        return singleOpenStrategy;
      case "multiple":
      default:
        return multipleOpenStrategy;
    }
  });
  const selected = useProxiedModel(props, "selected", props.selected, (v) => selectStrategy.value.in(v, children.value, parents.value), (v) => selectStrategy.value.out(v, children.value, parents.value));
  onBeforeUnmount(() => {
    isUnmounted = true;
  });
  function getPath(id) {
    const path = [];
    let parent = id;
    while (parent != null) {
      path.unshift(parent);
      parent = parents.value.get(parent);
    }
    return path;
  }
  const vm = getCurrentInstance("nested");
  const nested = {
    id: shallowRef(),
    root: {
      opened,
      selected,
      selectedValues: computed(() => {
        const arr = [];
        for (const [key, value] of selected.value.entries()) {
          if (value === "on")
            arr.push(key);
        }
        return arr;
      }),
      register: (id, parentId, isGroup) => {
        parentId && id !== parentId && parents.value.set(id, parentId);
        isGroup && children.value.set(id, []);
        if (parentId != null) {
          children.value.set(parentId, [...children.value.get(parentId) || [], id]);
        }
      },
      unregister: (id) => {
        if (isUnmounted)
          return;
        children.value.delete(id);
        const parent = parents.value.get(id);
        if (parent) {
          const list = children.value.get(parent) ?? [];
          children.value.set(parent, list.filter((child) => child !== id));
        }
        parents.value.delete(id);
        opened.value.delete(id);
      },
      open: (id, value, event) => {
        vm.emit("click:open", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newOpened = openStrategy.value.open({
          id,
          value,
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      openOnSelect: (id, value, event) => {
        const newOpened = openStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      select: (id, value, event) => {
        vm.emit("click:select", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newSelected = selectStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newSelected && (selected.value = newSelected);
        nested.root.openOnSelect(id, value, event);
      },
      children,
      parents
    }
  };
  provide(VNestedSymbol, nested);
  return nested.root;
};
var useNestedItem = (id, isGroup) => {
  const parent = inject(VNestedSymbol, emptyNested);
  const uidSymbol = Symbol(getUid());
  const computedId = computed(() => id.value !== void 0 ? id.value : uidSymbol);
  const item = {
    ...parent,
    id: computedId,
    open: (open, e) => parent.root.open(computedId.value, open, e),
    openOnSelect: (open, e) => parent.root.openOnSelect(computedId.value, open, e),
    isOpen: computed(() => parent.root.opened.value.has(computedId.value)),
    parent: computed(() => parent.root.parents.value.get(computedId.value)),
    select: (selected, e) => parent.root.select(computedId.value, selected, e),
    isSelected: computed(() => parent.root.selected.value.get(toRaw(computedId.value)) === "on"),
    isIndeterminate: computed(() => parent.root.selected.value.get(computedId.value) === "indeterminate"),
    isLeaf: computed(() => !parent.root.children.value.get(computedId.value)),
    isGroupActivator: parent.isGroupActivator
  };
  !parent.isGroupActivator && parent.root.register(computedId.value, parent.id.value, isGroup);
  onBeforeUnmount(() => {
    !parent.isGroupActivator && parent.root.unregister(computedId.value);
  });
  isGroup && provide(VNestedSymbol, item);
  return item;
};
var useNestedGroupActivator = () => {
  const parent = inject(VNestedSymbol, emptyNested);
  provide(VNestedSymbol, {
    ...parent,
    isGroupActivator: true
  });
};

// node_modules/vuetify/lib/composables/ssrBoot.mjs
function useSsrBoot() {
  const isBooted = shallowRef(false);
  onMounted(() => {
    window.requestAnimationFrame(() => {
      isBooted.value = true;
    });
  });
  const ssrBootStyles = computed(() => !isBooted.value ? {
    transition: "none !important"
  } : void 0);
  return {
    ssrBootStyles,
    isBooted: readonly(isBooted)
  };
}

// node_modules/vuetify/lib/components/VList/VListGroup.mjs
var VListGroupActivator = defineComponent({
  name: "VListGroupActivator",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    useNestedGroupActivator();
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
var makeVListGroupProps = propsFactory({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListGroup");
var VListGroup = genericComponent()({
  name: "VListGroup",
  props: makeVListGroupProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    const {
      isOpen,
      open,
      id: _id
    } = useNestedItem(toRef(props, "value"), true);
    const id = computed(() => `v-list-group--id-${String(_id.value)}`);
    const list = useList();
    const {
      isBooted
    } = useSsrBoot();
    function onClick(e) {
      open(!isOpen.value, e);
    }
    const activatorProps = computed(() => ({
      onClick,
      class: "v-list-group__header",
      id: id.value
    }));
    const toggleIcon = computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = computed(() => ({
      VListItem: {
        active: isOpen.value,
        activeColor: props.activeColor,
        baseColor: props.baseColor,
        color: props.color,
        prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
        appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
        title: props.title,
        value: props.value
      }
    }));
    useRender(() => createVNode(props.tag, {
      "class": ["v-list-group", {
        "v-list-group--prepend": list == null ? void 0 : list.hasPrepend.value,
        "v-list-group--fluid": props.fluid,
        "v-list-group--subgroup": props.subgroup,
        "v-list-group--open": isOpen.value
      }, props.class],
      "style": props.style
    }, {
      default: () => [slots.activator && createVNode(VDefaultsProvider, {
        "defaults": activatorDefaults.value
      }, {
        default: () => [createVNode(VListGroupActivator, null, {
          default: () => [slots.activator({
            props: activatorProps.value,
            isOpen: isOpen.value
          })]
        })]
      }), createVNode(MaybeTransition, {
        "transition": {
          component: VExpandTransition
        },
        "disabled": !isBooted.value
      }, {
        default: () => {
          var _a;
          return [withDirectives(createVNode("div", {
            "class": "v-list-group__items",
            "role": "group",
            "aria-labelledby": id.value
          }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vShow, isOpen.value]])];
        }
      })]
    }));
    return {};
  }
});

// node_modules/vuetify/lib/components/VList/VListItem.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VList/VListItem.css";

// node_modules/vuetify/lib/components/VList/VListItemSubtitle.mjs
var VListItemSubtitle = createSimpleFunctional("v-list-item-subtitle");

// node_modules/vuetify/lib/components/VList/VListItemTitle.mjs
var VListItemTitle = createSimpleFunctional("v-list-item-title");

// node_modules/vuetify/lib/components/VList/VListItem.mjs
var makeVListItemProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  disabled: Boolean,
  lines: String,
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  subtitle: [String, Number, Boolean],
  title: [String, Number, Boolean],
  value: null,
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VListItem");
var VListItem = genericComponent()({
  name: "VListItem",
  directives: {
    Ripple
  },
  props: makeVListItemProps(),
  emits: {
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const link = useLink(props, attrs);
    const id = computed(() => props.value === void 0 ? link.href.value : props.value);
    const {
      select,
      isSelected,
      isIndeterminate,
      isGroupActivator,
      root,
      parent,
      openOnSelect
    } = useNestedItem(id, false);
    const list = useList();
    const isActive = computed(() => {
      var _a;
      return props.active !== false && (props.active || ((_a = link.isActive) == null ? void 0 : _a.value) || isSelected.value);
    });
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || props.value != null && !!list));
    const roundedProps = computed(() => props.rounded || props.nav);
    const color = computed(() => props.color ?? props.activeColor);
    const variantProps = computed(() => ({
      color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
      variant: props.variant
    }));
    watch(() => {
      var _a;
      return (_a = link.isActive) == null ? void 0 : _a.value;
    }, (val) => {
      if (val && parent.value != null) {
        root.open(parent.value, true);
      }
      if (val) {
        openOnSelect(val);
      }
    }, {
      immediate: true
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(roundedProps);
    const lineClasses = computed(() => props.lines ? `v-list-item--${props.lines}-line` : void 0);
    const slotProps = computed(() => ({
      isActive: isActive.value,
      select,
      isSelected: isSelected.value,
      isIndeterminate: isIndeterminate.value
    }));
    function onClick(e) {
      var _a;
      emit("click", e);
      if (isGroupActivator || !isClickable.value)
        return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      props.value != null && select(!isSelected.value, e);
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = slots.title || props.title;
      const hasSubtitle = slots.subtitle || props.subtitle;
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      list == null ? void 0 : list.updateHasPrepend(hasPrepend);
      if (props.activeColor) {
        deprecate("active-color", ["color", "base-color"]);
      }
      return withDirectives(createVNode(Tag, {
        "class": ["v-list-item", {
          "v-list-item--active": isActive.value,
          "v-list-item--disabled": props.disabled,
          "v-list-item--link": isClickable.value,
          "v-list-item--nav": props.nav,
          "v-list-item--prepend": !hasPrepend && (list == null ? void 0 : list.hasPrepend.value),
          [`${props.activeClass}`]: props.activeClass && isActive.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, props.style],
        "href": link.href.value,
        "tabindex": isClickable.value ? list ? -2 : 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => {
          var _a;
          return [genOverlays(isClickable.value || isActive.value, "v-list-item"), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-list-item__prepend"
          }, [!slots.prepend ? createVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "density": props.density,
            "image": props.prependAvatar
          }, null), props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": props.prependIcon
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                density: props.density,
                image: props.prependAvatar
              },
              VIcon: {
                density: props.density,
                icon: props.prependIcon
              },
              VListItemAction: {
                start: true
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.prepend) == null ? void 0 : _a2.call(slots, slotProps.value)];
            }
          }), createVNode("div", {
            "class": "v-list-item__spacer"
          }, null)]), createVNode("div", {
            "class": "v-list-item__content",
            "data-no-activator": ""
          }, [hasTitle && createVNode(VListItemTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots, {
                title: props.title
              })) ?? props.title];
            }
          }), hasSubtitle && createVNode(VListItemSubtitle, {
            "key": "subtitle"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots, {
                subtitle: props.subtitle
              })) ?? props.subtitle];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
            "key": "append",
            "class": "v-list-item__append"
          }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "density": props.density,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "density": props.density,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                density: props.density,
                image: props.appendAvatar
              },
              VIcon: {
                density: props.density,
                icon: props.appendIcon
              },
              VListItemAction: {
                end: true
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.append) == null ? void 0 : _a2.call(slots, slotProps.value)];
            }
          }), createVNode("div", {
            "class": "v-list-item__spacer"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VList/VListSubheader.mjs
var makeVListSubheaderProps = propsFactory({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListSubheader");
var VListSubheader = genericComponent()({
  name: "VListSubheader",
  props: makeVListSubheaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      const hasText = !!(slots.default || props.title);
      return createVNode(props.tag, {
        "class": ["v-list-subheader", {
          "v-list-subheader--inset": props.inset,
          "v-list-subheader--sticky": props.sticky
        }, textColorClasses.value, props.class],
        "style": [{
          textColorStyles
        }, props.style]
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-list-subheader__text"
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.title])];
        }
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VDivider/VDivider.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VDivider/VDivider.css";
var makeVDividerProps = propsFactory({
  color: String,
  inset: Boolean,
  length: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VDivider");
var VDivider = genericComponent()({
  name: "VDivider",
  props: makeVDividerProps(),
  setup(props, _ref) {
    let {
      attrs
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const dividerStyles = computed(() => {
      const styles = {};
      if (props.length) {
        styles[props.vertical ? "maxHeight" : "maxWidth"] = convertToUnit(props.length);
      }
      if (props.thickness) {
        styles[props.vertical ? "borderRightWidth" : "borderTopWidth"] = convertToUnit(props.thickness);
      }
      return styles;
    });
    useRender(() => createVNode("hr", {
      "class": [{
        "v-divider": true,
        "v-divider--inset": props.inset,
        "v-divider--vertical": props.vertical
      }, themeClasses.value, textColorClasses.value, props.class],
      "style": [dividerStyles.value, textColorStyles.value, props.style],
      "aria-orientation": !attrs.role || attrs.role === "separator" ? props.vertical ? "vertical" : "horizontal" : void 0,
      "role": `${attrs.role || "separator"}`
    }, null));
    return {};
  }
});

// node_modules/vuetify/lib/components/VList/VListChildren.mjs
var makeVListChildrenProps = propsFactory({
  items: Array
}, "VListChildren");
var VListChildren = genericComponent()({
  name: "VListChildren",
  props: makeVListChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    createList();
    return () => {
      var _a, _b;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? ((_b = props.items) == null ? void 0 : _b.map((_ref2) => {
        var _a2, _b2;
        let {
          children,
          props: itemProps,
          type,
          raw: item
        } = _ref2;
        if (type === "divider") {
          return ((_a2 = slots.divider) == null ? void 0 : _a2.call(slots, {
            props: itemProps
          })) ?? createVNode(VDivider, itemProps, null);
        }
        if (type === "subheader") {
          return ((_b2 = slots.subheader) == null ? void 0 : _b2.call(slots, {
            props: itemProps
          })) ?? createVNode(VListSubheader, itemProps, null);
        }
        const slotsWithItem = {
          subtitle: slots.subtitle ? (slotProps) => {
            var _a3;
            return (_a3 = slots.subtitle) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          prepend: slots.prepend ? (slotProps) => {
            var _a3;
            return (_a3 = slots.prepend) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          append: slots.append ? (slotProps) => {
            var _a3;
            return (_a3 = slots.append) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          title: slots.title ? (slotProps) => {
            var _a3;
            return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0
        };
        const [listGroupProps, _1] = VListGroup.filterProps(itemProps);
        return children ? createVNode(VListGroup, mergeProps({
          "value": itemProps == null ? void 0 : itemProps.value
        }, listGroupProps), {
          activator: (_ref3) => {
            let {
              props: activatorProps
            } = _ref3;
            return slots.header ? slots.header({
              props: {
                ...itemProps,
                ...activatorProps
              }
            }) : createVNode(VListItem, mergeProps(itemProps, activatorProps), slotsWithItem);
          },
          default: () => createVNode(VListChildren, {
            "items": children
          }, slots)
        }) : slots.item ? slots.item({
          props: itemProps
        }) : createVNode(VListItem, itemProps, slotsWithItem);
      }));
    };
  }
});

// node_modules/vuetify/lib/composables/list-items.mjs
var makeItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, "list-items");
function transformItem(props, item) {
  const title = getPropertyFromItem(item, props.itemTitle, item);
  const value = getPropertyFromItem(item, props.itemValue, title);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? typeof item === "object" && item != null && !Array.isArray(item) ? "children" in item ? pick(item, ["children"])[1] : item : void 0 : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    title: String(_props.title ?? ""),
    value: _props.value,
    props: _props,
    children: Array.isArray(children) ? transformItems(props, children) : void 0,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
function useItems(props) {
  const items = computed(() => transformItems(props, props.items));
  const hasNullItem = computed(() => items.value.some((item) => item.value === null));
  function transformIn(value) {
    if (!hasNullItem.value) {
      value = value.filter((v) => v !== null);
    }
    return value.map((v) => {
      if (props.returnObject && typeof v === "string") {
        return transformItem(props, v);
      }
      return items.value.find((item) => props.valueComparator(v, item.value)) || transformItem(props, v);
    });
  }
  function transformOut(value) {
    return props.returnObject ? value.map((_ref) => {
      let {
        raw
      } = _ref;
      return raw;
    }) : value.map((_ref2) => {
      let {
        value: value2
      } = _ref2;
      return value2;
    });
  }
  return {
    items,
    transformIn,
    transformOut
  };
}

// node_modules/vuetify/lib/components/VList/VList.mjs
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function transformItem2(props, item) {
  const type = getPropertyFromItem(item, props.itemType, "item");
  const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
  const value = getPropertyFromItem(item, props.itemValue, void 0);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? pick(item, ["children"])[1] : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === "item" && children ? transformItems2(props, children) : void 0,
    raw: item
  };
}
function transformItems2(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem2(props, item));
  }
  return array;
}
function useListItems(props) {
  const items = computed(() => transformItems2(props, props.items));
  return {
    items
  };
}
var makeVListProps = propsFactory({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  nav: Boolean,
  ...makeNestedProps({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  itemType: {
    type: String,
    default: "type"
  },
  ...makeItemsProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VList");
var VList = genericComponent()({
  name: "VList",
  props: makeVListProps(),
  emits: {
    "update:selected": (val) => true,
    "update:opened": (val) => true,
    "click:open": (value) => true,
    "click:select": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      open,
      select
    } = useNested(props);
    const lineClasses = computed(() => props.lines ? `v-list--${props.lines}-line` : void 0);
    const activeColor = toRef(props, "activeColor");
    const baseColor = toRef(props, "baseColor");
    const color = toRef(props, "color");
    createList();
    provideDefaults({
      VListGroup: {
        activeColor,
        baseColor,
        color
      },
      VListItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor,
        baseColor,
        color,
        density: toRef(props, "density"),
        disabled: toRef(props, "disabled"),
        lines: toRef(props, "lines"),
        nav: toRef(props, "nav"),
        variant: toRef(props, "variant")
      }
    });
    const isFocused = shallowRef(false);
    const contentRef = ref();
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      var _a;
      if (!isFocused.value && !(e.relatedTarget && ((_a = contentRef.value) == null ? void 0 : _a.contains(e.relatedTarget))))
        focus();
    }
    function onKeydown(e) {
      if (!contentRef.value)
        return;
      if (e.key === "ArrowDown") {
        focus("next");
      } else if (e.key === "ArrowUp") {
        focus("prev");
      } else if (e.key === "Home") {
        focus("first");
      } else if (e.key === "End") {
        focus("last");
      } else {
        return;
      }
      e.preventDefault();
    }
    function focus(location) {
      if (contentRef.value) {
        return focusChild(contentRef.value, location);
      }
    }
    useRender(() => {
      return createVNode(props.tag, {
        "ref": contentRef,
        "class": ["v-list", {
          "v-list--disabled": props.disabled,
          "v-list--nav": props.nav
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, dimensionStyles.value, props.style],
        "tabindex": props.disabled || isFocused.value ? -1 : 0,
        "role": "listbox",
        "aria-activedescendant": void 0,
        "onFocusin": onFocusin,
        "onFocusout": onFocusout,
        "onFocus": onFocus,
        "onKeydown": onKeydown
      }, {
        default: () => [createVNode(VListChildren, {
          "items": items.value
        }, slots)]
      });
    });
    return {
      open,
      select,
      focus
    };
  }
});

// node_modules/vuetify/lib/components/VList/VListImg.mjs
var VListImg = createSimpleFunctional("v-list-img");

// node_modules/vuetify/lib/components/VList/VListItemAction.mjs
var makeVListItemActionProps = propsFactory({
  start: Boolean,
  end: Boolean,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListItemAction");
var VListItemAction = genericComponent()({
  name: "VListItemAction",
  props: makeVListItemActionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-list-item-action", {
        "v-list-item-action--start": props.start,
        "v-list-item-action--end": props.end
      }, props.class],
      "style": props.style
    }, slots));
    return {};
  }
});

// node_modules/vuetify/lib/components/VList/VListItemMedia.mjs
var makeVListItemMediaProps = propsFactory({
  start: Boolean,
  end: Boolean,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListItemMedia");
var VListItemMedia = genericComponent()({
  name: "VListItemMedia",
  props: makeVListItemMediaProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-list-item-media", {
          "v-list-item-media--start": props.start,
          "v-list-item-media--end": props.end
        }, props.class],
        "style": props.style
      }, slots);
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VMenu/VMenu.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VMenu/VMenu.css";

// node_modules/vuetify/lib/components/VOverlay/VOverlay.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VOverlay/VOverlay.css";

// node_modules/vuetify/lib/components/VOverlay/util/point.mjs
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function anchorToPoint(anchor, box) {
  if (anchor.side === "top" || anchor.side === "bottom") {
    const {
      side,
      align
    } = anchor;
    const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
    const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === "left" || anchor.side === "right") {
    const {
      side,
      align
    } = anchor;
    const x = side === "left" ? 0 : side === "right" ? box.width : side;
    const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}

// node_modules/vuetify/lib/components/VOverlay/locationStrategies.mjs
var locationStrategies = {
  static: staticLocationStrategy,
  // specific viewport position, usually centered
  connected: connectedLocationStrategy
  // connected to a certain element
};
var makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (val) => typeof val === "function" || val in locationStrategies
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function useLocationStrategies(props, data) {
  const contentStyles = ref({});
  const updateLocation = ref();
  if (IN_BROWSER) {
    useToggleScope(() => !!(data.isActive.value && props.locationStrategy), (reset) => {
      var _a, _b;
      watch(() => props.locationStrategy, reset);
      onScopeDispose(() => {
        updateLocation.value = void 0;
      });
      if (typeof props.locationStrategy === "function") {
        updateLocation.value = (_a = props.locationStrategy(data, props, contentStyles)) == null ? void 0 : _a.updateLocation;
      } else {
        updateLocation.value = (_b = locationStrategies[props.locationStrategy](data, props, contentStyles)) == null ? void 0 : _b.updateLocation;
      }
    });
    window.addEventListener("resize", onResize, {
      passive: true
    });
    onScopeDispose(() => {
      window.removeEventListener("resize", onResize);
      updateLocation.value = void 0;
    });
  }
  function onResize(e) {
    var _a;
    (_a = updateLocation.value) == null ? void 0 : _a.call(updateLocation, e);
  }
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
}
function getIntrinsicSize(el, isRtl) {
  if (isRtl) {
    el.style.removeProperty("left");
  } else {
    el.style.removeProperty("right");
  }
  const contentBox = nullifyTransforms(el);
  if (isRtl) {
    contentBox.x += parseFloat(el.style.right || 0);
  } else {
    contentBox.x -= parseFloat(el.style.left || 0);
  }
  contentBox.y -= parseFloat(el.style.top || 0);
  return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
  const activatorFixed = isFixedPosition(data.activatorEl.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: "fixed",
      top: 0,
      [data.isRtl.value ? "right" : "left"]: 0
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
    const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
    return computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === "string") {
      const offset2 = props.offset.split(" ").map(parseFloat);
      if (offset2.length < 2)
        offset2.push(0);
      return offset2;
    }
    return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  const observer = new ResizeObserver(() => {
    if (observe)
      updateLocation();
  });
  watch([data.activatorEl, data.contentEl], (_ref, _ref2) => {
    let [newActivatorEl, newContentEl] = _ref;
    let [oldActivatorEl, oldContentEl] = _ref2;
    if (oldActivatorEl)
      observer.unobserve(oldActivatorEl);
    if (newActivatorEl)
      observer.observe(newActivatorEl);
    if (oldContentEl)
      observer.unobserve(oldContentEl);
    if (newContentEl)
      observer.observe(newContentEl);
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    observer.disconnect();
  });
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => observe = true);
    });
    if (!data.activatorEl.value || !data.contentEl.value)
      return;
    const targetBox = data.activatorEl.value.getBoundingClientRect();
    const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
    const scrollParents = getScrollParents(data.contentEl.value);
    const viewportMargin = 12;
    if (!scrollParents.length) {
      scrollParents.push(document.documentElement);
      if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
        contentBox.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
        contentBox.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el) => {
      const rect = el.getBoundingClientRect();
      const scrollBox = new Box({
        x: el === document.documentElement ? 0 : rect.x,
        y: el === document.documentElement ? 0 : rect.y,
        width: el.clientWidth,
        height: el.clientHeight
      });
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, void 0);
    viewport.x += viewportMargin;
    viewport.y += viewportMargin;
    viewport.width -= viewportMargin * 2;
    viewport.height -= viewportMargin * 2;
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x: x2,
        y: y2
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case "top":
          y2 -= offset.value[0];
          break;
        case "bottom":
          y2 += offset.value[0];
          break;
        case "left":
          x2 -= offset.value[0];
          break;
        case "right":
          x2 += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case "top":
          y2 -= offset.value[1];
          break;
        case "bottom":
          y2 += offset.value[1];
          break;
        case "left":
          x2 -= offset.value[1];
          break;
        case "right":
          x2 += offset.value[1];
          break;
      }
      box.x += x2;
      box.y += y2;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x: x2,
        y: y2
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;
      {
        const axis2 = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ["x", "y"].forEach((key) => {
          if (key === "x" && hasOverflowX && !flipped.x || key === "y" && hasOverflowY && !flipped.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
            newPlacement.anchor = flip(newPlacement.anchor);
            newPlacement.origin = flip(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped[key] = true;
            }
          }
        });
        if (reset)
          continue;
      }
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }
      {
        const overflows2 = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows2.x.before - overflows2.x.after;
        available.y = viewport.height - overflows2.y.before - overflows2.y.after;
        x += overflows2.x.before;
        contentBox.x += overflows2.x.before;
        y += overflows2.y.before;
        contentBox.y += overflows2.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: convertToUnit(pixelRound(y)),
      left: data.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
      right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
      minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox
    };
  }
  watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  nextTick(() => {
    const result = updateLocation();
    if (!result)
      return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}

// node_modules/vuetify/lib/components/VOverlay/requestNewFrame.mjs
var clean = true;
var frames = [];
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
var raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame)
      frame();
    if (frames.length)
      run();
    else
      clean = true;
  });
}

// node_modules/vuetify/lib/components/VOverlay/scrollStrategies.mjs
var scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
var makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (val) => typeof val === "function" || val in scrollStrategies
  }
}, "VOverlay-scroll-strategies");
function useScrollStrategies(props, data) {
  if (!IN_BROWSER)
    return;
  let scope;
  watchEffect(async () => {
    scope == null ? void 0 : scope.stop();
    if (!(data.isActive.value && props.scrollStrategy))
      return;
    scope = effectScope();
    await nextTick();
    scope.active && scope.run(() => {
      var _a;
      if (typeof props.scrollStrategy === "function") {
        props.scrollStrategy(data, props, scope);
      } else {
        (_a = scrollStrategies[props.scrollStrategy]) == null ? void 0 : _a.call(scrollStrategies, data, props, scope);
      }
    });
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
}
function closeScrollStrategy(data) {
  function onScroll(e) {
    data.isActive.value = false;
  }
  bindScroll(data.activatorEl.value ?? data.contentEl.value, onScroll);
}
function blockScrollStrategy(data, props) {
  var _a;
  const offsetParent = (_a = data.root.value) == null ? void 0 : _a.offsetParent;
  const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(data.activatorEl.value, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
  const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;
  const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || document.documentElement);
  if (scrollableParent) {
    data.root.value.classList.add("v-overlay--scroll-blocked");
  }
  scrollElements.forEach((el, i) => {
    el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
    el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
    if (el !== document.documentElement) {
      el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
    }
    el.classList.add("v-overlay-scroll-blocked");
  });
  onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
      const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
      el.style.removeProperty("--v-body-scroll-x");
      el.style.removeProperty("--v-body-scroll-y");
      el.style.removeProperty("--v-scrollbar-offset");
      el.classList.remove("v-overlay-scroll-blocked");
      el.scrollLeft = -x;
      el.scrollTop = -y;
    });
    if (scrollableParent) {
      data.root.value.classList.remove("v-overlay--scroll-blocked");
    }
  });
}
function repositionScrollStrategy(data, props, scope) {
  let slow = false;
  let raf2 = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      var _a, _b;
      const start = performance.now();
      (_b = (_a = data.updateLocation).value) == null ? void 0 : _b.call(_a, e);
      const time = performance.now() - start;
      slow = time / (1e3 / 60) > 2;
    });
  }
  ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
    scope.run(() => {
      bindScroll(data.activatorEl.value ?? data.contentEl.value, (e) => {
        if (slow) {
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  onScopeDispose(() => {
    typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
    cancelAnimationFrame(raf2);
  });
}
function bindScroll(el, onScroll) {
  const scrollElements = [document, ...getScrollParents(el)];
  scrollElements.forEach((el2) => {
    el2.addEventListener("scroll", onScroll, {
      passive: true
    });
  });
  onScopeDispose(() => {
    scrollElements.forEach((el2) => {
      el2.removeEventListener("scroll", onScroll);
    });
  });
}

// node_modules/vuetify/lib/components/VMenu/shared.mjs
var VMenuSymbol = Symbol.for("vuetify:v-menu");

// node_modules/vuetify/lib/composables/delay.mjs
var makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  const delays = {};
  const runDelayFactory = (prop) => () => {
    if (!IN_BROWSER)
      return Promise.resolve(true);
    const active = prop === "openDelay";
    delays.closeDelay && window.clearTimeout(delays.closeDelay);
    delete delays.closeDelay;
    delays.openDelay && window.clearTimeout(delays.openDelay);
    delete delays.openDelay;
    return new Promise((resolve) => {
      const delay = parseInt(props[prop] ?? 0, 10);
      delays[prop] = window.setTimeout(() => {
        cb == null ? void 0 : cb(active);
        resolve(active);
      }, delay);
    });
  };
  return {
    runCloseDelay: runDelayFactory("closeDelay"),
    runOpenDelay: runDelayFactory("openDelay")
  };
}

// node_modules/vuetify/lib/components/VOverlay/useActivator.mjs
var makeActivatorProps = propsFactory({
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...makeDelayProps()
}, "VOverlay-activator");
function useActivator(props, _ref) {
  let {
    isActive,
    isTop
  } = _ref;
  const activatorEl = ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay(props, (value) => {
    if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
      if (isActive.value !== value) {
        firstEnter = true;
      }
      isActive.value = value;
    }
  });
  const availableEvents = {
    onClick: (e) => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      isActive.value = !isActive.value;
    },
    onMouseenter: (e) => {
      var _a;
      if ((_a = e.sourceCapabilities) == null ? void 0 : _a.firesTouchEvents)
        return;
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onMouseleave: (e) => {
      isHovered = false;
      runCloseDelay();
    },
    onFocus: (e) => {
      if (matchesSelector(e.target, ":focus-visible") === false)
        return;
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onBlur: (e) => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay();
    }
  };
  const activatorEvents = computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.onClick = availableEvents.onClick;
    }
    if (props.openOnHover) {
      events.onMouseenter = availableEvents.onMouseenter;
      events.onMouseleave = availableEvents.onMouseleave;
    }
    if (openOnFocus.value) {
      events.onFocus = availableEvents.onFocus;
      events.onBlur = availableEvents.onBlur;
    }
    return events;
  });
  const contentEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (openOnFocus.value) {
      events.onFocusin = () => {
        isFocused = true;
        runOpenDelay();
      };
      events.onFocusout = () => {
        isFocused = false;
        runCloseDelay();
      };
    }
    if (props.closeOnContentClick) {
      const menu = inject(VMenuSymbol, null);
      events.onClick = () => {
        isActive.value = false;
        menu == null ? void 0 : menu.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  watch(isTop, (val) => {
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered))) {
      isActive.value = false;
    }
  });
  const activatorRef = ref();
  watchEffect(() => {
    if (!activatorRef.value)
      return;
    nextTick(() => {
      activatorEl.value = refElement(activatorRef.value);
    });
  });
  const vm = getCurrentInstance("useActivator");
  let scope;
  watch(() => !!props.activator, (val) => {
    if (val && IN_BROWSER) {
      scope = effectScope();
      scope.run(() => {
        _useActivator(props, vm, {
          activatorEl,
          activatorEvents
        });
      });
    } else if (scope) {
      scope.stop();
    }
  }, {
    flush: "post",
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
  return {
    activatorEl,
    activatorRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function _useActivator(props, vm, _ref2) {
  let {
    activatorEl,
    activatorEvents
  } = _ref2;
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal);
      activator && unbindActivatorProps(activator);
    }
    if (val) {
      nextTick(() => bindActivatorProps());
    }
  }, {
    immediate: true
  });
  watch(() => props.activatorProps, () => {
    bindActivatorProps();
  });
  onScopeDispose(() => {
    unbindActivatorProps();
  });
  function bindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    bindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function unbindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    unbindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function getActivator() {
    var _a, _b;
    let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator;
    let activator;
    if (selector) {
      if (selector === "parent") {
        let el = (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$el) == null ? void 0 : _b.parentNode;
        while (el == null ? void 0 : el.hasAttribute("data-no-activator")) {
          el = el.parentNode;
        }
        activator = el;
      } else if (typeof selector === "string") {
        activator = document.querySelector(selector);
      } else if ("$el" in selector) {
        activator = selector.$el;
      } else {
        activator = selector;
      }
    }
    activatorEl.value = (activator == null ? void 0 : activator.nodeType) === Node.ELEMENT_NODE ? activator : null;
    return activatorEl.value;
  }
}

// node_modules/vuetify/lib/composables/hydration.mjs
function useHydration() {
  if (!IN_BROWSER)
    return shallowRef(false);
  const {
    ssr
  } = useDisplay();
  if (ssr) {
    const isMounted = shallowRef(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return isMounted;
  } else {
    return shallowRef(true);
  }
}

// node_modules/vuetify/lib/composables/lazy.mjs
var makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = shallowRef(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}

// node_modules/vuetify/lib/composables/scopeId.mjs
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}

// node_modules/vuetify/lib/composables/stack.mjs
var StackSymbol = Symbol.for("vuetify:stack");
var globalStack = reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance("useStack");
  const createStackEntry = !disableGlobalStack;
  const parent = inject(StackSymbol, void 0);
  const stack = reactive({
    activeChildren: /* @__PURE__ */ new Set()
  });
  provide(StackSymbol, stack);
  const _zIndex = shallowRef(+zIndex.value);
  useToggleScope(isActive, () => {
    var _a;
    const lastZIndex = (_a = globalStack.at(-1)) == null ? void 0 : _a[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent == null ? void 0 : parent.activeChildren.add(vm.uid);
    onScopeDispose(() => {
      if (createStackEntry) {
        const idx = toRaw(globalStack).findIndex((v) => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent == null ? void 0 : parent.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = shallowRef(true);
  if (createStackEntry) {
    watchEffect(() => {
      var _a;
      const _isTop = ((_a = globalStack.at(-1)) == null ? void 0 : _a[0]) === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = computed(() => !stack.activeChildren.size);
  return {
    globalTop: readonly(globalTop),
    localTop,
    stackStyles: computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}

// node_modules/vuetify/lib/composables/teleport.mjs
function useTeleport(target) {
  const teleportTarget = computed(() => {
    const _target = target.value;
    if (_target === true || !IN_BROWSER)
      return void 0;
    const targetElement = _target === false ? document.body : typeof _target === "string" ? document.querySelector(_target) : _target;
    if (targetElement == null) {
      warn(`Unable to locate target ${_target}`);
      return void 0;
    }
    let container = targetElement.querySelector(":scope > .v-overlay-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "v-overlay-container";
      targetElement.appendChild(container);
    }
    return container;
  });
  return {
    teleportTarget
  };
}

// node_modules/vuetify/lib/directives/click-outside/index.mjs
function defaultConditional() {
  return true;
}
function checkEvent(e, el, binding) {
  if (!e || checkIsActive(e, binding) === false)
    return false;
  const root = attachedRoot(el);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target)
    return false;
  const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
  elements.push(el);
  return !elements.some((el2) => el2 == null ? void 0 : el2.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el, binding) {
  const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el, callback) {
  const root = attachedRoot(el);
  callback(document);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}
var ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(el, binding) {
    const onClick = (e) => directive(e, el, binding);
    const onMousedown = (e) => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };
    handleShadow(el, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });
    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: false
      };
    }
    el._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  unmounted(el, binding) {
    if (!el._clickOutside)
      return;
    handleShadow(el, (app) => {
      var _a;
      if (!app || !((_a = el._clickOutside) == null ? void 0 : _a[binding.instance.$.uid]))
        return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[binding.instance.$.uid];
      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });
    delete el._clickOutside[binding.instance.$.uid];
  }
};

// node_modules/vuetify/lib/components/VOverlay/VOverlay.mjs
function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && createVNode("div", mergeProps({
      "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
var makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps2()
}, "VOverlay");
var VOverlay = genericComponent()({
  name: "VOverlay",
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    "click:outside": (e) => true,
    "update:modelValue": (value) => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const isActive = computed({
      get: () => model.value,
      set: (v) => {
        if (!(v && props.disabled))
          model.value = v;
      }
    });
    const {
      teleportTarget
    } = useTeleport(computed(() => props.attach || props.contained));
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, toRef(props, "zIndex"), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop
    });
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, (v) => {
      if (v)
        isActive.value = false;
    });
    const root = ref();
    const contentEl = ref();
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies(props, {
      isRtl,
      contentEl,
      activatorEl,
      isActive
    });
    useScrollStrategies(props, {
      root,
      contentEl,
      activatorEl,
      isActive,
      updateLocation
    });
    function onClickOutside(e) {
      emit("click:outside", e);
      if (!props.persistent)
        isActive.value = false;
      else
        animateClick();
    }
    function closeConditional() {
      return isActive.value && globalTop.value;
    }
    IN_BROWSER && watch(isActive, (val) => {
      if (val) {
        window.addEventListener("keydown", onKeydown);
      } else {
        window.removeEventListener("keydown", onKeydown);
      }
    }, {
      immediate: true
    });
    function onKeydown(e) {
      var _a, _b;
      if (e.key === "Escape" && globalTop.value) {
        if (!props.persistent) {
          isActive.value = false;
          if ((_a = contentEl.value) == null ? void 0 : _a.contains(document.activeElement)) {
            (_b = activatorEl.value) == null ? void 0 : _b.focus();
          }
        } else
          animateClick();
      }
    }
    const router = useRouter();
    useToggleScope(() => props.closeOnBack, () => {
      useBackButton(router, (next) => {
        if (globalTop.value && isActive.value) {
          next(false);
          if (!props.persistent)
            isActive.value = false;
          else
            animateClick();
        } else {
          next();
        }
      });
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== document.scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });
    function animateClick() {
      if (props.noClickAnimation)
        return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    useRender(() => {
      var _a;
      return createVNode(Fragment, null, [(_a = slots.activator) == null ? void 0 : _a.call(slots, {
        isActive: isActive.value,
        props: mergeProps({
          ref: activatorRef
        }, activatorEvents.value, props.activatorProps)
      }), isMounted.value && hasContent.value && createVNode(Teleport, {
        "disabled": !teleportTarget.value,
        "to": teleportTarget.value
      }, {
        default: () => [createVNode("div", mergeProps({
          "class": ["v-overlay", {
            "v-overlay--absolute": props.absolute || props.contained,
            "v-overlay--active": isActive.value,
            "v-overlay--contained": props.contained
          }, themeClasses.value, rtlClasses.value, props.class],
          "style": [stackStyles.value, {
            top: convertToUnit(top.value)
          }, props.style],
          "ref": root
        }, scopeId, attrs), [createVNode(Scrim, mergeProps({
          "color": scrimColor,
          "modelValue": isActive.value && !!props.scrim
        }, scrimEvents.value), null), createVNode(MaybeTransition, {
          "appear": true,
          "persisted": true,
          "transition": props.transition,
          "target": activatorEl.value,
          "onAfterLeave": () => {
            onAfterLeave();
            emit("afterLeave");
          }
        }, {
          default: () => {
            var _a2;
            return [withDirectives(createVNode("div", mergeProps({
              "ref": contentEl,
              "class": ["v-overlay__content", props.contentClass],
              "style": [dimensionStyles.value, contentStyles.value]
            }, contentEvents.value, props.contentProps), [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
              isActive
            })]), [[vShow, isActive.value], [resolveDirective("click-outside"), {
              handler: onClickOutside,
              closeConditional,
              include: () => [activatorEl.value]
            }]])];
          }
        })])]
      })]);
    });
    return {
      activatorEl,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});

// node_modules/vuetify/lib/composables/forwardRefs.mjs
var Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor)
      return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return void 0;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          const val = Reflect.get(ref2.value, key);
          return typeof val === "function" ? val.bind(ref2.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("__"))
        return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target2, key, value) {
      if (Reflect.has(target2, key)) {
        return Reflect.set(target2, key, value);
      }
      if (typeof key === "symbol" || key.startsWith("__"))
        return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return Reflect.set(ref2.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      var _a;
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor)
        return descriptor;
      if (typeof key === "symbol" || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (!ref2.value)
          continue;
        const descriptor2 = getDescriptor(ref2.value, key) ?? ("_" in ref2.value ? getDescriptor((_a = ref2.value._) == null ? void 0 : _a.setupState, key) : void 0);
        if (descriptor2)
          return descriptor2;
      }
      for (const ref2 of refs) {
        const childRefs = ref2.value && ref2.value[Refs];
        if (!childRefs)
          continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref3 = queue.shift();
          const descriptor2 = getDescriptor(ref3.value, key);
          if (descriptor2)
            return descriptor2;
          const childRefs2 = ref3.value && ref3.value[Refs];
          if (childRefs2)
            queue.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}

// node_modules/vuetify/lib/components/VMenu/VMenu.mjs
var makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
var VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(0);
    provide(VMenuSymbol, {
      register() {
        ++openChildren.value;
      },
      unregister() {
        --openChildren.value;
      },
      closeParents() {
        setTimeout(() => {
          if (!openChildren.value) {
            isActive.value = false;
            parent == null ? void 0 : parent.closeParents();
          }
        }, 40);
      }
    });
    async function onFocusIn(e) {
      var _a, _b, _c;
      const before = e.relatedTarget;
      const after = e.target;
      await nextTick();
      if (isActive.value && before !== after && ((_a = overlay.value) == null ? void 0 : _a.contentEl) && // We're the topmost menu
      ((_b = overlay.value) == null ? void 0 : _b.globalTop) && // It isn't the document or the menu body
      ![document, overlay.value.contentEl].includes(after) && // It isn't inside the menu body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        (_c = focusable[0]) == null ? void 0 : _c.focus();
      }
    }
    watch(isActive, (val) => {
      if (val) {
        parent == null ? void 0 : parent.register();
        document.addEventListener("focusin", onFocusIn, {
          once: true
        });
      } else {
        parent == null ? void 0 : parent.unregister();
        document.removeEventListener("focusin", onFocusIn);
      }
    });
    function onClickOutside() {
      parent == null ? void 0 : parent.closeParents();
    }
    function onKeydown(e) {
      var _a, _b, _c;
      if (props.disabled)
        return;
      if (e.key === "Tab") {
        const nextElement = getNextElement(focusableChildren((_a = overlay.value) == null ? void 0 : _a.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          (_c = (_b = overlay.value) == null ? void 0 : _b.activatorEl) == null ? void 0 : _c.focus();
        }
      }
    }
    function onActivatorKeydown(e) {
      var _a;
      if (props.disabled)
        return;
      const el = (_a = overlay.value) == null ? void 0 : _a.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          focusChild(el, "prev");
        }
      } else if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const [overlayProps] = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});

// node_modules/vuetify/lib/components/VTextField/VTextField.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VTextField/VTextField.css";

// node_modules/vuetify/lib/components/VCounter/VCounter.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VCounter/VCounter.css";
var makeVCounterProps = propsFactory({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps2({
    transition: {
      component: VSlideYTransition
    }
  })
}, "VCounter");
var VCounter = genericComponent()({
  name: "VCounter",
  functional: true,
  props: makeVCounterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = computed(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": ["v-counter", props.class],
        "style": props.style
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vShow, props.active]])]
    }));
    return {};
  }
});

// node_modules/vuetify/lib/components/VField/VField.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VField/VField.css";

// node_modules/vuetify/lib/components/VField/VFieldLabel.mjs
var makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, "VFieldLabel");
var VFieldLabel = genericComponent()({
  name: "VFieldLabel",
  props: makeVFieldLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VLabel, {
      "class": ["v-field-label", {
        "v-field-label--floating": props.floating
      }, props.class],
      "style": props.style,
      "aria-hidden": props.floating || void 0
    }, slots));
    return {};
  }
});

// node_modules/vuetify/lib/components/VField/VField.mjs
var allowedVariants2 = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"];
var makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (v) => allowedVariants2.includes(v)
  },
  "onClick:clear": EventProp(),
  "onClick:appendInner": EventProp(),
  "onClick:prependInner": EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, "VField");
var VField = genericComponent()({
  name: "VField",
  inheritAttrs: false,
  props: {
    id: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = computed(() => props.dirty || props.active);
    const hasLabel = computed(() => !props.singleLine && !!(props.label || slots.label));
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => {
      return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
    }));
    watch(isActive, (val) => {
      if (hasLabel.value) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : void 0;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
          const color = targetStyle.getPropertyValue("color");
          el.style.visibility = "visible";
          targetEl.style.visibility = "hidden";
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? "normal" : "reverse"
          }).finished.then(() => {
            el.style.removeProperty("visibility");
            targetEl.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      blur,
      focus
    }));
    function onClick(e) {
      if (e.target !== document.activeElement) {
        e.preventDefault();
      }
    }
    useRender(() => {
      var _a, _b, _c;
      const isOutlined = props.variant === "outlined";
      const hasPrepend = slots["prepend-inner"] || props.prependInnerIcon;
      const hasClear = !!(props.clearable || slots.clear);
      const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
      const label = slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode("div", mergeProps({
        "class": ["v-field", {
          "v-field--active": isActive.value,
          "v-field--appended": hasAppend,
          "v-field--center-affix": props.centerAffix ?? !isPlainOrUnderlined.value,
          "v-field--disabled": props.disabled,
          "v-field--dirty": props.dirty,
          "v-field--error": props.error,
          "v-field--flat": props.flat,
          "v-field--has-background": !!props.bgColor,
          "v-field--persistent-clear": props.persistentClear,
          "v-field--prepended": hasPrepend,
          "v-field--reverse": props.reverse,
          "v-field--single-line": props.singleLine,
          "v-field--no-label": !label,
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [createVNode("div", {
        "class": "v-field__overlay"
      }, null), createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
      }, {
        default: slots.loader
      }), hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [props.prependInnerIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner"
      }, null), (_a = slots["prepend-inner"]) == null ? void 0 : _a.call(slots, slotProps.value)]), createVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(props.variant) && hasLabel.value && createVNode(VFieldLabel, {
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true,
        "for": id.value,
        "style": textColorStyles.value
      }, {
        default: () => [label]
      }), createVNode(VFieldLabel, {
        "ref": labelRef,
        "for": id.value
      }, {
        default: () => [label]
      }), (_b = slots.default) == null ? void 0 : _b.call(slots, {
        ...slotProps.value,
        props: {
          id: id.value,
          class: "v-field__input",
          "aria-describedby": messagesId.value
        },
        focus,
        blur
      })]), hasClear && createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [slots.clear ? slots.clear() : createVNode(InputIcon, {
          "name": "clear"
        }, null)]), [[vShow, props.dirty]])]
      }), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [(_c = slots["append-inner"]) == null ? void 0 : _c.call(slots, slotProps.value), props.appendInnerIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner"
      }, null)]), createVNode("div", {
        "class": ["v-field__outline", textColorClasses.value],
        "style": textColorStyles.value
      }, [isOutlined && createVNode(Fragment, null, [createVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasLabel.value && createVNode("div", {
        "class": "v-field__outline__notch"
      }, [createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })]), createVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasLabel.value && createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label]
      })])]);
    });
    return {
      controlRef
    };
  }
});
function filterFieldProps(attrs) {
  const keys = Object.keys(VField.props).filter((k) => !isOn(k) && k !== "class" && k !== "style");
  return pick(attrs, keys);
}

// node_modules/vuetify/lib/components/VTextField/VTextField.mjs
var activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
var makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: Function,
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextField");
var VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    Intersect: intersect_default
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : (model.value ?? "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength)
        return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string")
        return void 0;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting)
        return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (inputRef.value !== document.activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value)
        focus();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value)
        return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter || props.counterValue);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const [{
        modelValue: _,
        ...inputProps
      }] = VInput.filterProps(props);
      const [fieldProps] = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-text-field--plain-underlined": ["plain", "underlined"].includes(props.variant)
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": props.role
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = withDirectives(createVNode("input", mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [createVNode("span", {
                "class": "v-text-field__prefix__text"
              }, [props.prefix])]), slots.default ? createVNode("div", {
                "class": fieldClass,
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [createVNode("span", {
                "class": "v-text-field__suffix__text"
              }, [props.suffix])])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});

// node_modules/vuetify/lib/components/VVirtualScroll/VVirtualScroll.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VVirtualScroll/VVirtualScroll.css";

// node_modules/vuetify/lib/components/VVirtualScroll/VVirtualScrollItem.mjs
var makeVVirtualScrollItemProps = propsFactory({
  renderless: Boolean,
  ...makeComponentProps()
}, "VVirtualScrollItem");
var VVirtualScrollItem = genericComponent()({
  name: "VVirtualScrollItem",
  inheritAttrs: false,
  props: makeVVirtualScrollItemProps(),
  emits: {
    "update:height": (height) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      resizeRef,
      contentRect
    } = useResizeObserver(void 0, "border");
    watch(() => {
      var _a;
      return (_a = contentRect.value) == null ? void 0 : _a.height;
    }, (height) => {
      if (height != null)
        emit("update:height", height);
    });
    useRender(() => {
      var _a, _b;
      return props.renderless ? createVNode(Fragment, null, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        itemRef: resizeRef
      })]) : createVNode("div", mergeProps({
        "ref": resizeRef,
        "class": ["v-virtual-scroll__item", props.class],
        "style": props.style
      }, attrs), [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
    });
  }
});

// node_modules/vuetify/lib/composables/virtual.mjs
var UP = -1;
var DOWN = 1;
var makeVirtualProps = propsFactory({
  itemHeight: {
    type: [Number, String],
    default: 48
  }
}, "virtual");
function useVirtual(props, items, offset) {
  const first = shallowRef(0);
  const baseItemHeight = shallowRef(props.itemHeight);
  const itemHeight = computed({
    get: () => parseInt(baseItemHeight.value ?? 0, 10),
    set(val) {
      baseItemHeight.value = val;
    }
  });
  const containerRef = ref();
  const {
    resizeRef,
    contentRect
  } = useResizeObserver();
  watchEffect(() => {
    resizeRef.value = containerRef.value;
  });
  const display = useDisplay();
  const sizeMap = /* @__PURE__ */ new Map();
  let sizes = Array.from({
    length: items.value.length
  });
  const visibleItems = computed(() => {
    const height = (!contentRect.value || containerRef.value === document.documentElement ? display.height.value : contentRect.value.height) - ((offset == null ? void 0 : offset.value) ?? 0);
    return Math.ceil(height / itemHeight.value * 1.7 + 1);
  });
  function handleItemResize(index, height) {
    itemHeight.value = Math.max(itemHeight.value, height);
    sizes[index] = height;
    sizeMap.set(items.value[index], height);
  }
  function calculateOffset(index) {
    return sizes.slice(0, index).reduce((acc, val) => acc + (val || itemHeight.value), 0);
  }
  function calculateMidPointIndex(scrollTop) {
    const end = items.value.length;
    let middle = 0;
    let middleOffset = 0;
    while (middleOffset < scrollTop && middle < end) {
      middleOffset += sizes[middle++] || itemHeight.value;
    }
    return middle - 1;
  }
  let lastScrollTop = 0;
  function handleScroll() {
    if (!containerRef.value || !contentRect.value)
      return;
    const height = contentRect.value.height - 56;
    const scrollTop = containerRef.value.scrollTop;
    const direction = scrollTop < lastScrollTop ? UP : DOWN;
    const midPointIndex = calculateMidPointIndex(scrollTop + height / 2);
    const buffer = Math.round(visibleItems.value / 3);
    const firstIndex = midPointIndex - buffer;
    const lastIndex = first.value + buffer * 2 - 1;
    if (direction === UP && midPointIndex <= lastIndex) {
      first.value = clamp(firstIndex, 0, items.value.length);
    } else if (direction === DOWN && midPointIndex >= lastIndex) {
      first.value = clamp(firstIndex, 0, items.value.length - visibleItems.value);
    }
    lastScrollTop = scrollTop;
  }
  function scrollToIndex(index) {
    if (!containerRef.value)
      return;
    const offset2 = calculateOffset(index);
    containerRef.value.scrollTop = offset2;
  }
  const last = computed(() => Math.min(items.value.length, first.value + visibleItems.value));
  const computedItems = computed(() => {
    return items.value.slice(first.value, last.value).map((item, index) => ({
      raw: item,
      index: index + first.value
    }));
  });
  const paddingTop = computed(() => calculateOffset(first.value));
  const paddingBottom = computed(() => calculateOffset(items.value.length) - calculateOffset(last.value));
  watch(() => items.value.length, () => {
    sizes = createRange(items.value.length).map(() => itemHeight.value);
    sizeMap.forEach((height, item) => {
      const index = items.value.indexOf(item);
      if (index === -1) {
        sizeMap.delete(item);
      } else {
        sizes[index] = height;
      }
    });
  });
  return {
    containerRef,
    computedItems,
    itemHeight,
    paddingTop,
    paddingBottom,
    scrollToIndex,
    handleScroll,
    handleItemResize
  };
}

// node_modules/vuetify/lib/components/VVirtualScroll/VVirtualScroll.mjs
var makeVVirtualScrollProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VVirtualScroll");
var VVirtualScroll = genericComponent()({
  name: "VVirtualScroll",
  props: makeVVirtualScrollProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const vm = getCurrentInstance("VVirtualScroll");
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      containerRef,
      handleScroll,
      handleItemResize,
      scrollToIndex,
      paddingTop,
      paddingBottom,
      computedItems
    } = useVirtual(props, toRef(props, "items"));
    useToggleScope(() => props.renderless, () => {
      onMounted(() => {
        var _a;
        containerRef.value = getScrollParent(vm.vnode.el, true);
        (_a = containerRef.value) == null ? void 0 : _a.addEventListener("scroll", handleScroll);
      });
      onScopeDispose(() => {
        var _a;
        (_a = containerRef.value) == null ? void 0 : _a.removeEventListener("scroll", handleScroll);
      });
    });
    useRender(() => {
      const children = computedItems.value.map((item) => createVNode(VVirtualScrollItem, {
        "key": item.index,
        "renderless": props.renderless,
        "onUpdate:height": (height) => handleItemResize(item.index, height)
      }, {
        default: (slotProps) => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots, {
            item: item.raw,
            index: item.index,
            ...slotProps
          });
        }
      }));
      return props.renderless ? createVNode(Fragment, null, [createVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingTop: convertToUnit(paddingTop.value)
        }
      }, null), children, createVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, null)]) : createVNode("div", {
        "ref": containerRef,
        "class": ["v-virtual-scroll", props.class],
        "onScroll": handleScroll,
        "style": [dimensionStyles.value, props.style]
      }, [createVNode("div", {
        "class": "v-virtual-scroll__container",
        "style": {
          paddingTop: convertToUnit(paddingTop.value),
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, [children])]);
    });
    return {
      scrollToIndex
    };
  }
});

// node_modules/vuetify/lib/components/VSelect/useScrolling.mjs
function useScrolling(listRef, textFieldRef) {
  const isScrolling = shallowRef(false);
  let scrollTimeout;
  function onListScroll(e) {
    cancelAnimationFrame(scrollTimeout);
    isScrolling.value = true;
    scrollTimeout = requestAnimationFrame(() => {
      scrollTimeout = requestAnimationFrame(() => {
        isScrolling.value = false;
      });
    });
  }
  async function finishScrolling() {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => {
      if (isScrolling.value) {
        const stop = watch(isScrolling, () => {
          stop();
          resolve();
        });
      } else
        resolve();
    });
  }
  async function onListKeydown(e) {
    var _a, _b;
    if (e.key === "Tab") {
      (_a = textFieldRef.value) == null ? void 0 : _a.focus();
    }
    if (!["PageDown", "PageUp", "Home", "End"].includes(e.key))
      return;
    const el = (_b = listRef.value) == null ? void 0 : _b.$el;
    if (!el)
      return;
    if (e.key === "Home" || e.key === "End") {
      el.scrollTo({
        top: e.key === "Home" ? 0 : el.scrollHeight,
        behavior: "smooth"
      });
    }
    await finishScrolling();
    const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (e.key === "PageDown" || e.key === "Home") {
      const top = el.getBoundingClientRect().top;
      for (const child of children) {
        if (child.getBoundingClientRect().top >= top) {
          child.focus();
          break;
        }
      }
    } else {
      const bottom = el.getBoundingClientRect().bottom;
      for (const child of [...children].reverse()) {
        if (child.getBoundingClientRect().bottom <= bottom) {
          child.focus();
          break;
        }
      }
    }
  }
  return {
    onListScroll,
    onListKeydown
  };
}

// node_modules/vuetify/lib/components/VSelect/VSelect.mjs
var makeSelectProps = propsFactory({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  menu: Boolean,
  menuIcon: {
    type: IconValue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...makeItemsProps({
    itemChildren: false
  })
}, "Select");
var makeVSelectProps = propsFactory({
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "button"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...makeTransitionProps2({
    transition: {
      component: VDialogTransition
    }
  })
}, "VSelect");
var VSelect = genericComponent()({
  name: "VSelect",
  props: makeVSelectProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true,
    "update:menu": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        var _a;
        if (_menu.value && !v && ((_a = vMenuRef.value) == null ? void 0 : _a.ΨopenChildren))
          return;
        _menu.value = v;
      }
    });
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const form = useForm();
    const selectedValues = computed(() => model.value.map((selection) => selection.value));
    const isFocused = shallowRef(false);
    const label = computed(() => menu.value ? props.closeText : props.openText);
    let keyboardLookupPrefix = "";
    let keyboardLookupLastTime;
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return items.value.filter((item) => !model.value.some((s) => s === item));
      }
      return items.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !items.value.length || props.readonly || (form == null ? void 0 : form.isReadonly.value));
    const listRef = ref();
    const {
      onListScroll,
      onListKeydown
    } = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value)
        return;
      menu.value = !menu.value;
    }
    function onKeydown(e) {
      var _a, _b;
      if (!e.key || props.readonly || (form == null ? void 0 : form.isReadonly.value))
        return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown", " "].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape", "Tab"].includes(e.key)) {
        menu.value = false;
      }
      if (e.key === "Home") {
        (_a = listRef.value) == null ? void 0 : _a.focus("first");
      } else if (e.key === "End") {
        (_b = listRef.value) == null ? void 0 : _b.focus("last");
      }
      const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
      function checkPrintable(e2) {
        const isPrintableChar = e2.key.length === 1;
        const noModifier = !e2.ctrlKey && !e2.metaKey && !e2.altKey;
        return isPrintableChar && noModifier;
      }
      if (props.multiple || !checkPrintable(e))
        return;
      const now = performance.now();
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = "";
      }
      keyboardLookupPrefix += e.key.toLowerCase();
      keyboardLookupLastTime = now;
      const item = items.value.find((item2) => item2.title.toLowerCase().startsWith(keyboardLookupPrefix));
      if (item !== void 0) {
        model.value = [item];
      }
    }
    function select(item) {
      if (props.multiple) {
        const index = model.value.findIndex((selection) => props.valueComparator(selection.value, item.value));
        if (index === -1) {
          model.value = [...model.value, item];
        } else {
          const value = [...model.value];
          value.splice(index, 1);
          model.value = value;
        }
      } else {
        model.value = [item];
        menu.value = false;
      }
    }
    function onBlur(e) {
      var _a;
      if (!((_a = listRef.value) == null ? void 0 : _a.$el.contains(e.relatedTarget))) {
        menu.value = false;
      }
    }
    function onAfterLeave() {
      var _a;
      if (isFocused.value) {
        (_a = vTextFieldRef.value) == null ? void 0 : _a.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onModelUpdate(v) {
      if (v == null)
        model.value = [];
      else if (matchesSelector(vTextFieldRef.value, ":autofill") || matchesSelector(vTextFieldRef.value, ":-webkit-autofill")) {
        const item = items.value.find((item2) => item2.title === v);
        if (item) {
          select(item);
        }
      } else if (vTextFieldRef.value) {
        vTextFieldRef.value.value = "";
      }
    }
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        const index = displayItems.value.findIndex((item) => model.value.some((s) => props.valueComparator(s.value, item.value)));
        IN_BROWSER && window.requestAnimationFrame(() => {
          var _a;
          index >= 0 && ((_a = vVirtualScrollRef.value) == null ? void 0 : _a.scrollToIndex(index));
        });
      }
    });
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const [textFieldProps] = VTextField.filterProps(props);
      const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": model.value.map((v) => v.props.value).join(", "),
        "onUpdate:modelValue": onModelUpdate,
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "dirty": isDirty,
        "class": ["v-select", {
          "v-select--active-menu": menu.value,
          "v-select--chips": !!props.chips,
          [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
          "v-select--selected": model.value.length,
          "v-select--selection-slot": !!slots.selection
        }, props.class],
        "style": props.style,
        "inputmode": "none",
        "placeholder": placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "aria-label": t(label.value),
        "title": t(label.value)
      }), {
        ...slots,
        default: () => createVNode(Fragment, null, [createVNode(VMenu, mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": ($event) => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-select__content",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterLeave": onAfterLeave
        }, props.menuProps), {
          default: () => [hasList && createVNode(VList, {
            "ref": listRef,
            "selected": selectedValues.value,
            "selectStrategy": props.multiple ? "independent" : "single-independent",
            "onMousedown": (e) => e.preventDefault(),
            "onKeydown": onListKeydown,
            "onFocusin": onFocusin,
            "onScrollPassive": onListScroll,
            "tabindex": "-1",
            "color": props.itemColor ?? props.color
          }, {
            default: () => {
              var _a, _b, _c;
              return [(_a = slots["prepend-item"]) == null ? void 0 : _a.call(slots), !displayItems.value.length && !props.hideNoData && (((_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) ?? createVNode(VListItem, {
                "title": t(props.noDataText)
              }, null)), createVNode(VVirtualScroll, {
                "ref": vVirtualScrollRef,
                "renderless": true,
                "items": displayItems.value
              }, {
                default: (_ref2) => {
                  var _a2;
                  let {
                    item,
                    index,
                    itemRef
                  } = _ref2;
                  const itemProps = mergeProps(item.props, {
                    ref: itemRef,
                    key: index,
                    onClick: () => select(item)
                  });
                  return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                    item,
                    index,
                    props: itemProps
                  })) ?? createVNode(VListItem, itemProps, {
                    prepend: (_ref3) => {
                      let {
                        isSelected
                      } = _ref3;
                      return createVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                        "key": item.value,
                        "modelValue": isSelected,
                        "ripple": false,
                        "tabindex": "-1"
                      }, null) : void 0, item.props.prependIcon && createVNode(VIcon, {
                        "icon": item.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (_c = slots["append-item"]) == null ? void 0 : _c.call(slots)];
            }
          })]
        }), model.value.map((item, index) => {
          var _a;
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item);
          }
          const slotProps = {
            "onClick:close": onChipClose,
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            "onUpdate:modelValue": void 0
          };
          return createVNode("div", {
            "key": item.value,
            "class": "v-select__selection"
          }, [hasChips ? !slots.chip ? createVNode(VChip, mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title
          }, slotProps), null) : createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: "small",
                text: item.title
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.chip) == null ? void 0 : _a2.call(slots, {
                item,
                index,
                props: slotProps
              })];
            }
          }) : ((_a = slots.selection) == null ? void 0 : _a.call(slots, {
            item,
            index
          })) ?? createVNode("span", {
            "class": "v-select__selection-text"
          }, [item.title, props.multiple && index < model.value.length - 1 && createVNode("span", {
            "class": "v-select__selection-comma"
          }, [createTextVNode(",")])])]);
        })]),
        "append-inner": function() {
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(Fragment, null, [(_a = slots["append-inner"]) == null ? void 0 : _a.call(slots, ...args), props.menuIcon ? createVNode(VIcon, {
            "class": "v-select__menu-icon",
            "icon": props.menuIcon
          }, null) : void 0]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      menu,
      select
    }, vTextFieldRef);
  }
});

// node_modules/vuetify/lib/labs/VDataTable/composables/paginate.mjs
var makeDataTablePaginateProps = propsFactory({
  page: {
    type: [Number, String],
    default: 1
  },
  itemsPerPage: {
    type: [Number, String],
    default: 10
  }
}, "DataTable-paginate");
var VDataTablePaginationSymbol = Symbol.for("vuetify:data-table-pagination");
function createPagination(props) {
  const page = useProxiedModel(props, "page", void 0, (value) => +(value ?? 1));
  const itemsPerPage = useProxiedModel(props, "itemsPerPage", void 0, (value) => +(value ?? 10));
  return {
    page,
    itemsPerPage
  };
}
function providePagination(options) {
  const {
    page,
    itemsPerPage,
    itemsLength
  } = options;
  const startIndex = computed(() => {
    if (itemsPerPage.value === -1)
      return 0;
    return itemsPerPage.value * (page.value - 1);
  });
  const stopIndex = computed(() => {
    if (itemsPerPage.value === -1)
      return itemsLength.value;
    return Math.min(itemsLength.value, startIndex.value + itemsPerPage.value);
  });
  const pageCount = computed(() => {
    if (itemsPerPage.value === -1 || itemsLength.value === 0)
      return 1;
    return Math.ceil(itemsLength.value / itemsPerPage.value);
  });
  watchEffect(() => {
    if (page.value > pageCount.value) {
      page.value = pageCount.value;
    }
  });
  function setItemsPerPage(value) {
    itemsPerPage.value = value;
    page.value = 1;
  }
  function nextPage() {
    page.value = clamp(page.value + 1, 1, pageCount.value);
  }
  function prevPage() {
    page.value = clamp(page.value - 1, 1, pageCount.value);
  }
  function setPage(value) {
    page.value = clamp(value, 1, pageCount.value);
  }
  const data = {
    page,
    itemsPerPage,
    startIndex,
    stopIndex,
    pageCount,
    itemsLength,
    nextPage,
    prevPage,
    setPage,
    setItemsPerPage
  };
  provide(VDataTablePaginationSymbol, data);
  return data;
}
function usePagination() {
  const data = inject(VDataTablePaginationSymbol);
  if (!data)
    throw new Error("Missing pagination!");
  return data;
}
function usePaginatedItems(options) {
  const {
    items,
    startIndex,
    stopIndex,
    itemsPerPage
  } = options;
  const paginatedItems = computed(() => {
    if (itemsPerPage.value <= 0)
      return items.value;
    return items.value.slice(startIndex.value, stopIndex.value);
  });
  return {
    paginatedItems
  };
}

// node_modules/vuetify/lib/labs/VDataTable/VDataTableFooter.mjs
var makeVDataTableFooterProps = propsFactory({
  prevIcon: {
    type: String,
    default: "$prev"
  },
  nextIcon: {
    type: String,
    default: "$next"
  },
  firstIcon: {
    type: String,
    default: "$first"
  },
  lastIcon: {
    type: String,
    default: "$last"
  },
  itemsPerPageText: {
    type: String,
    default: "$vuetify.dataFooter.itemsPerPageText"
  },
  pageText: {
    type: String,
    default: "$vuetify.dataFooter.pageText"
  },
  firstPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.firstPage"
  },
  prevPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.prevPage"
  },
  nextPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.nextPage"
  },
  lastPageLabel: {
    type: String,
    default: "$vuetify.dataFooter.lastPage"
  },
  itemsPerPageOptions: {
    type: Array,
    default: () => [{
      value: 10,
      title: "10"
    }, {
      value: 25,
      title: "25"
    }, {
      value: 50,
      title: "50"
    }, {
      value: 100,
      title: "100"
    }, {
      value: -1,
      title: "$vuetify.dataFooter.itemsPerPageAll"
    }]
  },
  showCurrentPage: Boolean
}, "VDataTableFooter");
var VDataTableFooter = genericComponent()({
  name: "VDataTableFooter",
  props: makeVDataTableFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      page,
      pageCount,
      startIndex,
      stopIndex,
      itemsLength,
      itemsPerPage,
      setItemsPerPage
    } = usePagination();
    const itemsPerPageOptions = computed(() => props.itemsPerPageOptions.map((option) => ({
      ...option,
      title: t(option.title)
    })));
    return () => {
      var _a;
      return createVNode("div", {
        "class": "v-data-table-footer"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": "v-data-table-footer__items-per-page"
      }, [createVNode("span", null, [t(props.itemsPerPageText)]), createVNode(VSelect, {
        "items": itemsPerPageOptions.value,
        "modelValue": itemsPerPage.value,
        "onUpdate:modelValue": (v) => setItemsPerPage(Number(v)),
        "density": "compact",
        "variant": "outlined",
        "hide-details": true
      }, null)]), createVNode("div", {
        "class": "v-data-table-footer__info"
      }, [createVNode("div", null, [t(props.pageText, !itemsLength.value ? 0 : startIndex.value + 1, stopIndex.value, itemsLength.value)])]), createVNode("div", {
        "class": "v-data-table-footer__pagination"
      }, [createVNode(VBtn, {
        "icon": props.firstIcon,
        "variant": "plain",
        "onClick": () => page.value = 1,
        "disabled": page.value === 1,
        "aria-label": t(props.firstPageLabel)
      }, null), createVNode(VBtn, {
        "icon": props.prevIcon,
        "variant": "plain",
        "onClick": () => page.value = Math.max(1, page.value - 1),
        "disabled": page.value === 1,
        "aria-label": t(props.prevPageLabel)
      }, null), props.showCurrentPage && createVNode("span", {
        "key": "page",
        "class": "v-data-table-footer__page"
      }, [page.value]), createVNode(VBtn, {
        "icon": props.nextIcon,
        "variant": "plain",
        "onClick": () => page.value = Math.min(pageCount.value, page.value + 1),
        "disabled": page.value === pageCount.value,
        "aria-label": t(props.nextPageLabel)
      }, null), createVNode(VBtn, {
        "icon": props.lastIcon,
        "variant": "plain",
        "onClick": () => page.value = pageCount.value,
        "disabled": page.value === pageCount.value,
        "aria-label": t(props.lastPageLabel)
      }, null)])]);
    };
  }
});

// node_modules/vuetify/lib/labs/VDataTable/VDataTableColumn.mjs
var VDataTableColumn = defineFunctionalComponent({
  align: {
    type: String,
    default: "start"
  },
  fixed: Boolean,
  fixedOffset: [Number, String],
  height: [Number, String],
  lastFixed: Boolean,
  noPadding: Boolean,
  tag: String,
  width: [Number, String]
}, (props, _ref) => {
  let {
    slots,
    attrs
  } = _ref;
  const Tag = props.tag ?? "td";
  return createVNode(Tag, mergeProps({
    "class": ["v-data-table__td", {
      "v-data-table-column--fixed": props.fixed,
      "v-data-table-column--last-fixed": props.lastFixed,
      "v-data-table-column--no-padding": props.noPadding
    }, `v-data-table-column--align-${props.align}`],
    "style": {
      height: convertToUnit(props.height),
      width: convertToUnit(props.width),
      left: convertToUnit(props.fixedOffset || null)
    }
  }, attrs), {
    default: () => {
      var _a;
      return [(_a = slots.default) == null ? void 0 : _a.call(slots)];
    }
  });
});

// node_modules/vuetify/lib/labs/VDataTable/composables/headers.mjs
var makeDataTableHeaderProps = propsFactory({
  headers: {
    type: Array,
    default: () => []
  }
}, "DataTable-header");
var VDataTableHeadersSymbol = Symbol.for("vuetify:data-table-headers");
function createHeaders(props, options) {
  const headers = ref([]);
  const columns = ref([]);
  watchEffect(() => {
    var _a, _b, _c;
    const wrapped = !props.headers.length ? [] : Array.isArray(props.headers[0]) ? props.headers : [props.headers];
    const flat = wrapped.flatMap((row, index) => row.map((column) => ({
      column,
      row: index
    })));
    const rowCount = wrapped.length;
    const defaultHeader = {
      title: "",
      sortable: false
    };
    const defaultActionHeader = {
      ...defaultHeader,
      width: 48
    };
    if ((_a = options == null ? void 0 : options.groupBy) == null ? void 0 : _a.value.length) {
      const index = flat.findIndex((_ref) => {
        let {
          column
        } = _ref;
        return column.key === "data-table-group";
      });
      if (index < 0)
        flat.unshift({
          column: {
            ...defaultHeader,
            key: "data-table-group",
            title: "Group",
            rowspan: rowCount
          },
          row: 0
        });
      else
        flat.splice(index, 1, {
          column: {
            ...defaultHeader,
            ...flat[index].column
          },
          row: flat[index].row
        });
    }
    if ((_b = options == null ? void 0 : options.showSelect) == null ? void 0 : _b.value) {
      const index = flat.findIndex((_ref2) => {
        let {
          column
        } = _ref2;
        return column.key === "data-table-select";
      });
      if (index < 0)
        flat.unshift({
          column: {
            ...defaultActionHeader,
            key: "data-table-select",
            rowspan: rowCount
          },
          row: 0
        });
      else
        flat.splice(index, 1, {
          column: {
            ...defaultActionHeader,
            ...flat[index].column
          },
          row: flat[index].row
        });
    }
    if ((_c = options == null ? void 0 : options.showExpand) == null ? void 0 : _c.value) {
      const index = flat.findIndex((_ref3) => {
        let {
          column
        } = _ref3;
        return column.key === "data-table-expand";
      });
      if (index < 0)
        flat.push({
          column: {
            ...defaultActionHeader,
            key: "data-table-expand",
            rowspan: rowCount
          },
          row: 0
        });
      else
        flat.splice(index, 1, {
          column: {
            ...defaultActionHeader,
            ...flat[index].column
          },
          row: flat[index].row
        });
    }
    const fixedRows = createRange(rowCount).map(() => []);
    const fixedOffsets = createRange(rowCount).fill(0);
    flat.forEach((_ref4) => {
      let {
        column,
        row
      } = _ref4;
      let key = column.key;
      if (key == null) {
        consoleWarn("The header key value must not be null or undefined");
        key = "";
      }
      for (let i = row; i <= row + (column.rowspan ?? 1) - 1; i++) {
        fixedRows[i].push({
          ...column,
          key,
          fixedOffset: fixedOffsets[i],
          sortable: column.sortable ?? !!column.key
        });
        fixedOffsets[i] += Number(column.width ?? 0);
      }
    });
    fixedRows.forEach((row) => {
      for (let i = row.length; i--; i >= 0) {
        if (row[i].fixed) {
          row[i].lastFixed = true;
          return;
        }
      }
    });
    const seen = /* @__PURE__ */ new Set();
    headers.value = fixedRows.map((row) => {
      const filtered = [];
      for (const column of row) {
        if (!seen.has(column.key)) {
          seen.add(column.key);
          filtered.push(column);
        }
      }
      return filtered;
    });
    columns.value = fixedRows.at(-1) ?? [];
  });
  const data = {
    headers,
    columns
  };
  provide(VDataTableHeadersSymbol, data);
  return data;
}
function useHeaders() {
  const data = inject(VDataTableHeadersSymbol);
  if (!data)
    throw new Error("Missing headers!");
  return data;
}

// node_modules/vuetify/lib/labs/VDataTable/composables/select.mjs
var singleSelectStrategy = {
  showSelectAll: false,
  allSelected: () => [],
  select: (_ref) => {
    var _a;
    let {
      items,
      value
    } = _ref;
    return new Set(value ? [(_a = items[0]) == null ? void 0 : _a.value] : []);
  },
  selectAll: (_ref2) => {
    let {
      selected
    } = _ref2;
    return selected;
  }
};
var pageSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref3) => {
    let {
      currentPage
    } = _ref3;
    return currentPage;
  },
  select: (_ref4) => {
    let {
      items,
      value,
      selected
    } = _ref4;
    for (const item of items) {
      if (value)
        selected.add(item.value);
      else
        selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref5) => {
    let {
      value,
      currentPage,
      selected
    } = _ref5;
    return pageSelectStrategy.select({
      items: currentPage,
      value,
      selected
    });
  }
};
var allSelectStrategy = {
  showSelectAll: true,
  allSelected: (_ref6) => {
    let {
      allItems
    } = _ref6;
    return allItems;
  },
  select: (_ref7) => {
    let {
      items,
      value,
      selected
    } = _ref7;
    for (const item of items) {
      if (value)
        selected.add(item.value);
      else
        selected.delete(item.value);
    }
    return selected;
  },
  selectAll: (_ref8) => {
    let {
      value,
      allItems,
      selected
    } = _ref8;
    return allSelectStrategy.select({
      items: allItems,
      value,
      selected
    });
  }
};
var makeDataTableSelectProps = propsFactory({
  showSelect: Boolean,
  selectStrategy: {
    type: [String, Object],
    default: "page"
  },
  modelValue: {
    type: Array,
    default: () => []
  }
}, "DataTable-select");
var VDataTableSelectionSymbol = Symbol.for("vuetify:data-table-selection");
function provideSelection(props, _ref9) {
  let {
    allItems,
    currentPage
  } = _ref9;
  const selected = useProxiedModel(props, "modelValue", props.modelValue, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  const allSelectable = computed(() => allItems.value.filter((item) => item.selectable));
  const currentPageSelectable = computed(() => currentPage.value.filter((item) => item.selectable));
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object")
      return props.selectStrategy;
    switch (props.selectStrategy) {
      case "single":
        return singleSelectStrategy;
      case "all":
        return allSelectStrategy;
      case "page":
      default:
        return pageSelectStrategy;
    }
  });
  function isSelected(items) {
    return wrapInArray(items).every((item) => selected.value.has(item.value));
  }
  function isSomeSelected(items) {
    return wrapInArray(items).some((item) => selected.value.has(item.value));
  }
  function select(items, value) {
    const newSelected = selectStrategy.value.select({
      items,
      value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  function toggleSelect(item) {
    select([item], !isSelected([item]));
  }
  function selectAll(value) {
    const newSelected = selectStrategy.value.selectAll({
      value,
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value,
      selected: new Set(selected.value)
    });
    selected.value = newSelected;
  }
  const someSelected = computed(() => selected.value.size > 0);
  const allSelected = computed(() => {
    const items = selectStrategy.value.allSelected({
      allItems: allSelectable.value,
      currentPage: currentPageSelectable.value
    });
    return isSelected(items);
  });
  const data = {
    toggleSelect,
    select,
    selectAll,
    isSelected,
    isSomeSelected,
    someSelected,
    allSelected,
    showSelectAll: selectStrategy.value.showSelectAll
  };
  provide(VDataTableSelectionSymbol, data);
  return data;
}
function useSelection() {
  const data = inject(VDataTableSelectionSymbol);
  if (!data)
    throw new Error("Missing selection!");
  return data;
}

// node_modules/vuetify/lib/labs/VDataTable/composables/sort.mjs
var makeDataTableSortProps = propsFactory({
  sortBy: {
    type: Array,
    default: () => []
  },
  customKeySort: Object,
  multiSort: Boolean,
  mustSort: Boolean
}, "DataTable-sort");
var VDataTableSortSymbol = Symbol.for("vuetify:data-table-sort");
function createSort(props) {
  const sortBy = useProxiedModel(props, "sortBy");
  const mustSort = toRef(props, "mustSort");
  const multiSort = toRef(props, "multiSort");
  return {
    sortBy,
    mustSort,
    multiSort
  };
}
function provideSort(options) {
  const {
    sortBy,
    mustSort,
    multiSort,
    page
  } = options;
  const toggleSort = (column) => {
    let newSortBy = sortBy.value.map((x) => ({
      ...x
    })) ?? [];
    const item = newSortBy.find((x) => x.key === column.key);
    if (!item) {
      if (multiSort.value)
        newSortBy = [...newSortBy, {
          key: column.key,
          order: "asc"
        }];
      else
        newSortBy = [{
          key: column.key,
          order: "asc"
        }];
    } else if (item.order === "desc") {
      if (mustSort.value) {
        item.order = "asc";
      } else {
        newSortBy = newSortBy.filter((x) => x.key !== column.key);
      }
    } else {
      item.order = "desc";
    }
    sortBy.value = newSortBy;
    if (page)
      page.value = 1;
  };
  function isSorted(column) {
    return !!sortBy.value.find((item) => item.key === column.key);
  }
  const data = {
    sortBy,
    toggleSort,
    isSorted
  };
  provide(VDataTableSortSymbol, data);
  return data;
}
function useSort() {
  const data = inject(VDataTableSortSymbol);
  if (!data)
    throw new Error("Missing sort!");
  return data;
}
function useSortedItems(props, items, sortBy) {
  const locale = useLocale();
  const sortedItems = computed(() => {
    if (!sortBy.value.length)
      return items.value;
    return sortItems(items.value, sortBy.value, locale.current.value, props.customKeySort);
  });
  return {
    sortedItems
  };
}
function sortItems(items, sortByItems, locale, customSorters) {
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: "accent",
    usage: "sort"
  });
  return [...items].sort((a, b) => {
    for (let i = 0; i < sortByItems.length; i++) {
      const sortKey = sortByItems[i].key;
      const sortOrder = sortByItems[i].order ?? "asc";
      if (sortOrder === false)
        continue;
      let sortA = getObjectValueByPath(a.raw, sortKey);
      let sortB = getObjectValueByPath(b.raw, sortKey);
      if (sortOrder === "desc") {
        [sortA, sortB] = [sortB, sortA];
      }
      if (customSorters == null ? void 0 : customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult)
          continue;
        return customResult;
      }
      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }
      [sortA, sortB] = [sortA, sortB].map((s) => s != null ? s.toString().toLocaleLowerCase() : s);
      if (sortA !== sortB) {
        if (isEmpty(sortA) && isEmpty(sortB))
          return 0;
        if (isEmpty(sortA))
          return -1;
        if (isEmpty(sortB))
          return 1;
        if (!isNaN(sortA) && !isNaN(sortB))
          return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }
    return 0;
  });
}

// node_modules/vuetify/lib/labs/VDataTable/VDataTableHeaders.mjs
var makeVDataTableHeadersProps = propsFactory({
  color: String,
  sticky: Boolean,
  multiSort: Boolean,
  sortAscIcon: {
    type: IconValue,
    default: "$sortAsc"
  },
  sortDescIcon: {
    type: IconValue,
    default: "$sortDesc"
  },
  ...makeLoaderProps()
}, "VDataTableHeaders");
var VDataTableHeaders = genericComponent()({
  name: "VDataTableHeaders",
  props: makeVDataTableHeadersProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      toggleSort,
      sortBy,
      isSorted
    } = useSort();
    const {
      someSelected,
      allSelected,
      selectAll,
      showSelectAll
    } = useSelection();
    const {
      columns,
      headers
    } = useHeaders();
    const {
      loaderClasses
    } = useLoader(props);
    const getFixedStyles = (column, y) => {
      if (!props.sticky && !column.fixed)
        return void 0;
      return {
        position: "sticky",
        zIndex: column.fixed ? 4 : props.sticky ? 3 : void 0,
        // TODO: This needs to account for possible previous fixed columns.
        left: column.fixed ? convertToUnit(column.fixedOffset) : void 0,
        // TODO: This needs to account for possible row/colspan of previous columns
        top: props.sticky ? `calc(var(--v-table-header-height) * ${y})` : void 0
      };
    };
    function getSortIcon(column) {
      const item = sortBy.value.find((item2) => item2.key === column.key);
      if (!item)
        return props.sortAscIcon;
      return item.order === "asc" ? props.sortAscIcon : props.sortDescIcon;
    }
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(props, "color");
    const slotProps = computed(() => ({
      headers: headers.value,
      columns: columns.value,
      toggleSort,
      isSorted,
      sortBy: sortBy.value,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      selectAll,
      getSortIcon,
      getFixedStyles
    }));
    const VDataTableHeaderCell = (_ref2) => {
      let {
        column,
        x,
        y
      } = _ref2;
      const noPadding = column.key === "data-table-select" || column.key === "data-table-expand";
      return createVNode(VDataTableColumn, {
        "tag": "th",
        "align": column.align,
        "class": ["v-data-table__th", {
          "v-data-table__th--sortable": column.sortable,
          "v-data-table__th--sorted": isSorted(column)
        }, loaderClasses.value],
        "style": {
          width: convertToUnit(column.width),
          minWidth: convertToUnit(column.width),
          ...getFixedStyles(column, y)
        },
        "colspan": column.colspan,
        "rowspan": column.rowspan,
        "onClick": column.sortable ? () => toggleSort(column) : void 0,
        "lastFixed": column.lastFixed,
        "noPadding": noPadding
      }, {
        default: () => {
          var _a;
          const columnSlotName = `column.${column.key}`;
          const columnSlotProps = {
            column,
            selectAll,
            isSorted,
            toggleSort,
            sortBy: sortBy.value,
            someSelected: someSelected.value,
            allSelected: allSelected.value,
            getSortIcon
          };
          if (slots[columnSlotName])
            return slots[columnSlotName](columnSlotProps);
          if (column.key === "data-table-select") {
            return ((_a = slots["column.data-table-select"]) == null ? void 0 : _a.call(slots, columnSlotProps)) ?? (showSelectAll && createVNode(VCheckboxBtn, {
              "modelValue": allSelected.value,
              "indeterminate": someSelected.value && !allSelected.value,
              "onUpdate:modelValue": selectAll
            }, null));
          }
          return createVNode("div", {
            "class": "v-data-table-header__content"
          }, [createVNode("span", null, [column.title]), column.sortable && createVNode(VIcon, {
            "key": "icon",
            "class": "v-data-table-header__sort-icon",
            "icon": getSortIcon(column)
          }, null), props.multiSort && isSorted(column) && createVNode("div", {
            "key": "badge",
            "class": ["v-data-table-header__sort-badge", ...backgroundColorClasses.value],
            "style": backgroundColorStyles.value
          }, [sortBy.value.findIndex((x2) => x2.key === column.key) + 1])]);
        }
      });
    };
    useRender(() => {
      return createVNode(Fragment, null, [slots.headers ? slots.headers(slotProps.value) : headers.value.map((row, y) => createVNode("tr", null, [row.map((column, x) => createVNode(VDataTableHeaderCell, {
        "column": column,
        "x": x,
        "y": y
      }, null))])), props.loading && createVNode("tr", {
        "class": "v-data-table-progress"
      }, [createVNode("th", {
        "colspan": columns.value.length
      }, [createVNode(LoaderSlot, {
        "name": "v-data-table-progress",
        "active": true,
        "color": typeof props.loading === "boolean" ? void 0 : props.loading,
        "indeterminate": true
      }, {
        default: slots.loader
      })])])]);
    });
  }
});

// node_modules/vuetify/lib/labs/VDataTable/composables/group.mjs
var makeDataTableGroupProps = propsFactory({
  groupBy: {
    type: Array,
    default: () => []
  }
}, "DataTable-group");
var VDataTableGroupSymbol = Symbol.for("vuetify:data-table-group");
function createGroupBy(props) {
  const groupBy = useProxiedModel(props, "groupBy");
  return {
    groupBy
  };
}
function provideGroupBy(options) {
  const {
    groupBy,
    sortBy
  } = options;
  const opened = ref(/* @__PURE__ */ new Set());
  const sortByWithGroups = computed(() => {
    return groupBy.value.map((val) => ({
      ...val,
      order: val.order ?? false
    })).concat(sortBy.value);
  });
  function isGroupOpen(group) {
    return opened.value.has(group.id);
  }
  function toggleGroup(group) {
    const newOpened = new Set(opened.value);
    if (!isGroupOpen(group))
      newOpened.add(group.id);
    else
      newOpened.delete(group.id);
    opened.value = newOpened;
  }
  function extractRows(items) {
    function dive(group) {
      const arr = [];
      for (const item of group.items) {
        if ("type" in item && item.type === "group") {
          arr.push(...dive(item));
        } else {
          arr.push(item);
        }
      }
      return arr;
    }
    return dive({
      type: "group",
      items,
      id: "dummy",
      key: "dummy",
      value: "dummy",
      depth: 0
    });
  }
  const data = {
    sortByWithGroups,
    toggleGroup,
    opened,
    groupBy,
    extractRows,
    isGroupOpen
  };
  provide(VDataTableGroupSymbol, data);
  return data;
}
function useGroupBy() {
  const data = inject(VDataTableGroupSymbol);
  if (!data)
    throw new Error("Missing group!");
  return data;
}
function groupItemsByProperty(items, groupBy) {
  if (!items.length)
    return [];
  const groups = /* @__PURE__ */ new Map();
  for (const item of items) {
    const value = getObjectValueByPath(item.raw, groupBy);
    if (!groups.has(value)) {
      groups.set(value, []);
    }
    groups.get(value).push(item);
  }
  return groups;
}
function groupItems(items, groupBy) {
  let depth = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
  let prefix = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "root";
  if (!groupBy.length)
    return [];
  const groupedItems = groupItemsByProperty(items, groupBy[0]);
  const groups = [];
  const rest = groupBy.slice(1);
  groupedItems.forEach((items2, value) => {
    const key = groupBy[0];
    const id = `${prefix}_${key}_${value}`;
    groups.push({
      depth,
      id,
      key,
      value,
      items: rest.length ? groupItems(items2, rest, depth + 1, id) : items2,
      type: "group"
    });
  });
  return groups;
}
function flattenItems(items, opened) {
  const flatItems = [];
  for (const item of items) {
    if ("type" in item && item.type === "group") {
      if (item.value != null) {
        flatItems.push(item);
      }
      if (opened.has(item.id) || item.value == null) {
        flatItems.push(...flattenItems(item.items, opened));
      }
    } else {
      flatItems.push(item);
    }
  }
  return flatItems;
}
function useGroupedItems(items, groupBy, opened) {
  const flatItems = computed(() => {
    if (!groupBy.value.length)
      return items.value;
    const groupedItems = groupItems(items.value, groupBy.value.map((item) => item.key));
    return flattenItems(groupedItems, opened.value);
  });
  return {
    flatItems
  };
}

// node_modules/vuetify/lib/labs/VDataTable/VDataTableGroupHeaderRow.mjs
var makeVDataTableGroupHeaderRowProps = propsFactory({
  item: {
    type: Object,
    required: true
  }
}, "VDataTableGroupHeaderRow");
var VDataTableGroupHeaderRow = genericComponent()({
  name: "VDataTableGroupHeaderRow",
  props: makeVDataTableGroupHeaderRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isGroupOpen,
      toggleGroup,
      extractRows
    } = useGroupBy();
    const {
      isSelected,
      isSomeSelected,
      select
    } = useSelection();
    const {
      columns
    } = useHeaders();
    const rows = computed(() => {
      return extractRows([props.item]);
    });
    return () => createVNode("tr", {
      "class": "v-data-table-group-header-row",
      "style": {
        "--v-data-table-group-header-row-depth": props.item.depth
      }
    }, [columns.value.map((column) => {
      var _a, _b;
      if (column.key === "data-table-group") {
        const icon = isGroupOpen(props.item) ? "$expand" : "$next";
        const onClick = () => toggleGroup(props.item);
        return ((_a = slots["data-table-group"]) == null ? void 0 : _a.call(slots, {
          item: props.item,
          count: rows.value.length,
          props: {
            icon,
            onClick
          }
        })) ?? createVNode(VDataTableColumn, {
          "class": "v-data-table-group-header-row__column"
        }, {
          default: () => [createVNode(VBtn, {
            "size": "small",
            "variant": "text",
            "icon": icon,
            "onClick": onClick
          }, null), createVNode("span", null, [props.item.value]), createVNode("span", null, [createTextVNode("("), rows.value.length, createTextVNode(")")])]
        });
      }
      if (column.key === "data-table-select") {
        const modelValue = isSelected(rows.value);
        const indeterminate = isSomeSelected(rows.value) && !modelValue;
        const selectGroup = (v) => select(rows.value, v);
        return ((_b = slots["data-table-select"]) == null ? void 0 : _b.call(slots, {
          props: {
            modelValue,
            indeterminate,
            "onUpdate:modelValue": selectGroup
          }
        })) ?? createVNode("td", null, [createVNode(VCheckboxBtn, {
          "modelValue": modelValue,
          "indeterminate": indeterminate,
          "onUpdate:modelValue": selectGroup
        }, null)]);
      }
      return createVNode("td", null, null);
    })]);
  }
});

// node_modules/vuetify/lib/labs/VDataTable/composables/expand.mjs
var makeDataTableExpandProps = propsFactory({
  expandOnClick: Boolean,
  showExpand: Boolean,
  expanded: {
    type: Array,
    default: () => []
  }
}, "DataTable-expand");
var VDataTableExpandedKey = Symbol.for("vuetify:datatable:expanded");
function provideExpanded(props) {
  const expandOnClick = toRef(props, "expandOnClick");
  const expanded = useProxiedModel(props, "expanded", props.expanded, (v) => {
    return new Set(v);
  }, (v) => {
    return [...v.values()];
  });
  function expand(item, value) {
    const newExpanded = new Set(expanded.value);
    if (!value) {
      newExpanded.delete(item.value);
    } else {
      newExpanded.add(item.value);
    }
    expanded.value = newExpanded;
  }
  function isExpanded(item) {
    return expanded.value.has(item.value);
  }
  function toggleExpand(item) {
    expand(item, !isExpanded(item));
  }
  const data = {
    expand,
    expanded,
    expandOnClick,
    isExpanded,
    toggleExpand
  };
  provide(VDataTableExpandedKey, data);
  return data;
}
function useExpanded() {
  const data = inject(VDataTableExpandedKey);
  if (!data)
    throw new Error("foo");
  return data;
}

// node_modules/vuetify/lib/labs/VDataTable/VDataTableRow.mjs
var makeVDataTableRowProps = propsFactory({
  index: Number,
  item: Object,
  onClick: Function
}, "VDataTableRow");
var VDataTableRow = defineComponent({
  name: "VDataTableRow",
  props: makeVDataTableRowProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      isExpanded,
      toggleExpand
    } = useExpanded();
    const {
      columns
    } = useHeaders();
    useRender(() => createVNode("tr", {
      "class": ["v-data-table__tr", {
        "v-data-table__tr--clickable": !!props.onClick
      }],
      "onClick": props.onClick
    }, [props.item && columns.value.map((column, i) => createVNode(VDataTableColumn, {
      "align": column.align,
      "fixed": column.fixed,
      "fixedOffset": column.fixedOffset,
      "lastFixed": column.lastFixed,
      "noPadding": column.key === "data-table-select" || column.key === "data-table-expand",
      "width": column.width
    }, {
      default: () => {
        var _a, _b;
        const item = props.item;
        const slotName = `item.${column.key}`;
        const slotProps = {
          index: props.index,
          item: props.item,
          columns: columns.value,
          isSelected,
          toggleSelect,
          isExpanded,
          toggleExpand
        };
        if (slots[slotName])
          return slots[slotName](slotProps);
        if (column.key === "data-table-select") {
          return ((_a = slots["item.data-table-select"]) == null ? void 0 : _a.call(slots, slotProps)) ?? createVNode(VCheckboxBtn, {
            "disabled": !item.selectable,
            "modelValue": isSelected([item]),
            "onClick": withModifiers(() => toggleSelect(item), ["stop"])
          }, null);
        }
        if (column.key === "data-table-expand") {
          return ((_b = slots["item.data-table-expand"]) == null ? void 0 : _b.call(slots, slotProps)) ?? createVNode(VBtn, {
            "icon": isExpanded(item) ? "$collapse" : "$expand",
            "size": "small",
            "variant": "text",
            "onClick": withModifiers(() => toggleExpand(item), ["stop"])
          }, null);
        }
        return getPropertyFromItem(item.columns, column.key);
      }
    }))]));
  }
});

// node_modules/vuetify/lib/labs/VDataTable/VDataTableRows.mjs
var makeVDataTableRowsProps = propsFactory({
  loading: [Boolean, String],
  loadingText: {
    type: String,
    default: "$vuetify.dataIterator.loadingText"
  },
  hideNoData: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  rowHeight: Number,
  "onClick:row": Function
}, "VDataTableRows");
var VDataTableRows = genericComponent()({
  name: "VDataTableRows",
  props: makeVDataTableRowsProps(),
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      columns
    } = useHeaders();
    const {
      expandOnClick,
      toggleExpand,
      isExpanded
    } = useExpanded();
    const {
      isSelected,
      toggleSelect
    } = useSelection();
    const {
      toggleGroup,
      isGroupOpen
    } = useGroupBy();
    const {
      t
    } = useLocale();
    useRender(() => {
      var _a;
      if (props.loading && slots.loading) {
        return createVNode("tr", {
          "class": "v-data-table-rows-loading",
          "key": "loading"
        }, [createVNode("td", {
          "colspan": columns.value.length
        }, [slots.loading()])]);
      }
      if (!props.loading && !props.items.length && !props.hideNoData) {
        return createVNode("tr", {
          "class": "v-data-table-rows-no-data",
          "key": "no-data"
        }, [createVNode("td", {
          "colspan": columns.value.length
        }, [((_a = slots["no-data"]) == null ? void 0 : _a.call(slots)) ?? t(props.noDataText)])]);
      }
      return createVNode(Fragment, null, [props.items.map((item, index) => {
        var _a2;
        if (item.type === "group") {
          return slots["group-header"] ? slots["group-header"]({
            index,
            item,
            columns: columns.value,
            isExpanded,
            toggleExpand,
            isSelected,
            toggleSelect,
            toggleGroup,
            isGroupOpen
          }) : createVNode(VDataTableGroupHeaderRow, {
            "key": `group-header_${item.id}`,
            "item": item
          }, slots);
        }
        const slotProps = {
          index,
          item,
          columns: columns.value,
          isExpanded,
          toggleExpand,
          isSelected,
          toggleSelect
        };
        const itemSlotProps = {
          ...slotProps,
          props: {
            key: `item_${item.key ?? item.index}`,
            onClick: expandOnClick.value || props["onClick:row"] ? (event) => {
              var _a3;
              if (expandOnClick.value) {
                toggleExpand(item);
              }
              (_a3 = props["onClick:row"]) == null ? void 0 : _a3.call(props, event, {
                item
              });
            } : void 0,
            index,
            item
          }
        };
        return createVNode(Fragment, null, [slots.item ? slots.item(itemSlotProps) : createVNode(VDataTableRow, itemSlotProps.props, slots), isExpanded(item) && ((_a2 = slots["expanded-row"]) == null ? void 0 : _a2.call(slots, slotProps))]);
      })]);
    });
    return {};
  }
});

// node_modules/vuetify/lib/components/VTable/VTable.mjs
import "/usr/src/csms/frontend/node_modules/vuetify/lib/components/VTable/VTable.css";
var makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VTable");
var VTable = genericComponent()({
  name: "VTable",
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => createVNode(props.tag, {
      "class": ["v-table", {
        "v-table--fixed-height": !!props.height,
        "v-table--fixed-header": props.fixedHeader,
        "v-table--fixed-footer": props.fixedFooter,
        "v-table--has-top": !!slots.top,
        "v-table--has-bottom": !!slots.bottom,
        "v-table--hover": props.hover
      }, themeClasses.value, densityClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b, _c;
        return [(_a = slots.top) == null ? void 0 : _a.call(slots), slots.default ? createVNode("div", {
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [createVNode("table", null, [slots.default()])]) : (_b = slots.wrapper) == null ? void 0 : _b.call(slots), (_c = slots.bottom) == null ? void 0 : _c.call(slots)];
      }
    }));
    return {};
  }
});

// node_modules/vuetify/lib/labs/VDataTable/composables/items.mjs
var makeDataTableItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemValue: {
    type: [String, Array, Function],
    default: "id"
  },
  itemSelectable: {
    type: [String, Array, Function],
    default: null
  },
  returnObject: Boolean
}, "DataTable-items");
function transformItem3(props, item, index, columns) {
  const value = props.returnObject ? item : getPropertyFromItem(item, props.itemValue);
  const selectable = getPropertyFromItem(item, props.itemSelectable, true);
  const itemColumns = columns.reduce((obj, column) => {
    obj[column.key] = getPropertyFromItem(item, column.value ?? column.key);
    return obj;
  }, {});
  return {
    type: "item",
    key: props.returnObject ? getPropertyFromItem(item, props.itemValue) : value,
    index,
    value,
    selectable,
    columns: itemColumns,
    raw: item
  };
}
function transformItems3(props, items, columns) {
  return items.map((item, index) => transformItem3(props, item, index, columns));
}
function useDataTableItems(props, columns) {
  const items = computed(() => transformItems3(props, props.items, columns.value));
  return {
    items
  };
}

// node_modules/vuetify/lib/labs/VDataTable/composables/options.mjs
function useOptions(_ref) {
  let {
    page,
    itemsPerPage,
    sortBy,
    groupBy,
    search
  } = _ref;
  const vm = getCurrentInstance("VDataTable");
  const options = computed(() => ({
    page: page.value,
    itemsPerPage: itemsPerPage.value,
    sortBy: sortBy.value,
    groupBy: groupBy.value,
    search: search.value
  }));
  watch(() => search == null ? void 0 : search.value, () => {
    page.value = 1;
  });
  let oldOptions = null;
  watch(options, () => {
    if (deepEqual(oldOptions, options.value))
      return;
    vm.emit("update:options", options.value);
    oldOptions = options.value;
  }, {
    deep: true,
    immediate: true
  });
}

// node_modules/vuetify/lib/composables/filter.mjs
var defaultFilter = (value, query, item) => {
  if (value == null || query == null)
    return -1;
  return value.toString().toLocaleLowerCase().indexOf(query.toString().toLocaleLowerCase());
};
var makeFilterProps = propsFactory({
  customFilter: Function,
  customKeyFilter: Object,
  filterKeys: [Array, String],
  filterMode: {
    type: String,
    default: "intersection"
  },
  noFilter: Boolean
}, "filter");
function filterItems(items, query, options) {
  var _a;
  const array = [];
  const filter = (options == null ? void 0 : options.default) ?? defaultFilter;
  const keys = (options == null ? void 0 : options.filterKeys) ? wrapInArray(options.filterKeys) : false;
  const customFiltersLength = Object.keys((options == null ? void 0 : options.customKeyFilter) ?? {}).length;
  if (!(items == null ? void 0 : items.length))
    return array;
  loop:
    for (let i = 0; i < items.length; i++) {
      const [item, transformed = item] = wrapInArray(items[i]);
      const customMatches = {};
      const defaultMatches = {};
      let match = -1;
      if (query && !(options == null ? void 0 : options.noFilter)) {
        if (typeof item === "object") {
          const filterKeys = keys || Object.keys(transformed);
          for (const key of filterKeys) {
            const value = getPropertyFromItem(transformed, key, transformed);
            const keyFilter = (_a = options == null ? void 0 : options.customKeyFilter) == null ? void 0 : _a[key];
            match = keyFilter ? keyFilter(value, query, item) : filter(value, query, item);
            if (match !== -1 && match !== false) {
              if (keyFilter)
                customMatches[key] = match;
              else
                defaultMatches[key] = match;
            } else if ((options == null ? void 0 : options.filterMode) === "every") {
              continue loop;
            }
          }
        } else {
          match = filter(item, query, item);
          if (match !== -1 && match !== false) {
            defaultMatches.title = match;
          }
        }
        const defaultMatchesLength = Object.keys(defaultMatches).length;
        const customMatchesLength = Object.keys(customMatches).length;
        if (!defaultMatchesLength && !customMatchesLength)
          continue;
        if ((options == null ? void 0 : options.filterMode) === "union" && customMatchesLength !== customFiltersLength && !defaultMatchesLength)
          continue;
        if ((options == null ? void 0 : options.filterMode) === "intersection" && (customMatchesLength !== customFiltersLength || !defaultMatchesLength))
          continue;
      }
      array.push({
        index: i,
        matches: {
          ...defaultMatches,
          ...customMatches
        }
      });
    }
  return array;
}
function useFilter(props, items, query, options) {
  const filteredItems = ref([]);
  const filteredMatches = ref(/* @__PURE__ */ new Map());
  const transformedItems = computed(() => (options == null ? void 0 : options.transform) ? unref(items).map((item) => [item, options.transform(item)]) : unref(items));
  watchEffect(() => {
    const _query = typeof query === "function" ? query() : unref(query);
    const strQuery = typeof _query !== "string" && typeof _query !== "number" ? "" : String(_query);
    const results = filterItems(transformedItems.value, strQuery, {
      customKeyFilter: props.customKeyFilter,
      default: props.customFilter,
      filterKeys: props.filterKeys,
      filterMode: props.filterMode,
      noFilter: props.noFilter
    });
    const originalItems = unref(items);
    const _filteredItems = [];
    const _filteredMatches = /* @__PURE__ */ new Map();
    results.forEach((_ref) => {
      let {
        index,
        matches
      } = _ref;
      const item = originalItems[index];
      _filteredItems.push(item);
      _filteredMatches.set(item.value, matches);
    });
    filteredItems.value = _filteredItems;
    filteredMatches.value = _filteredMatches;
  });
  function getMatches(item) {
    return filteredMatches.value.get(item.value);
  }
  return {
    filteredItems,
    filteredMatches,
    getMatches
  };
}

// node_modules/vuetify/lib/labs/VDataTable/VDataTable.mjs
var makeDataTableProps = propsFactory({
  ...makeVDataTableRowsProps(),
  width: [String, Number],
  search: String,
  ...makeDataTableExpandProps(),
  ...makeDataTableGroupProps(),
  ...makeDataTableHeaderProps(),
  ...makeDataTableItemsProps(),
  ...makeDataTableSelectProps(),
  ...makeDataTableSortProps(),
  ...makeVDataTableHeadersProps(),
  ...makeVTableProps()
}, "DataTable");
var makeVDataTableProps = propsFactory({
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeFilterProps(),
  ...makeVDataTableFooterProps()
}, "VDataTable");
var VDataTable = genericComponent()({
  name: "VDataTable",
  props: makeVDataTableProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (value) => true,
    "update:itemsPerPage": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups);
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const itemsLength = computed(() => flatItems.value.length);
    const {
      startIndex,
      stopIndex,
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      paginatedItems
    } = usePaginatedItems({
      items: flatItems,
      startIndex,
      stopIndex,
      itemsPerPage
    });
    const paginatedItemsWithoutGroups = computed(() => extractRows(paginatedItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: paginatedItemsWithoutGroups
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: paginatedItemsWithoutGroups.value,
      groupedItems: paginatedItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const [dataTableFooterProps] = VDataTableFooter.filterProps(props);
      const [dataTableHeadersProps] = VDataTableHeaders.filterProps(props);
      const [dataTableRowsProps] = VDataTableRows.filterProps(props);
      const [tableProps] = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--show-select": props.showSelect,
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d;
          return slots.default ? slots.default(slotProps.value) : createVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), createVNode("thead", null, [createVNode(VDataTableHeaders, dataTableHeadersProps, slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), createVNode("tbody", null, [slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(dataTableRowsProps, {
            "items": paginatedItems.value
          }), slots)]), (_c = slots.tbody) == null ? void 0 : _c.call(slots, slotProps.value), (_d = slots.tfoot) == null ? void 0 : _d.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : createVNode(Fragment, null, [createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })])
      });
    });
    return {};
  }
});

// node_modules/vuetify/lib/labs/VDataTable/VDataTableVirtual.mjs
var makeVDataTableVirtualProps = propsFactory({
  ...makeDataTableProps(),
  ...makeDataTableGroupProps(),
  ...makeVirtualProps(),
  ...makeFilterProps()
}, "VDataTableVirtual");
var VDataTableVirtual = genericComponent()({
  name: "VDataTableVirtual",
  props: makeVDataTableVirtualProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:sortBy": (value) => true,
    "update:options": (value) => true,
    "update:groupBy": (value) => true,
    "update:expanded": (value) => true,
    "click:row": (e, value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const search = toRef(props, "search");
    const {
      filteredItems
    } = useFilter(props, items, search, {
      transform: (item) => item.columns
    });
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort
    });
    const {
      sortByWithGroups,
      opened,
      extractRows,
      isGroupOpen,
      toggleGroup
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      sortedItems
    } = useSortedItems(props, filteredItems, sortByWithGroups);
    const {
      flatItems
    } = useGroupedItems(sortedItems, groupBy, opened);
    const allItems = computed(() => extractRows(flatItems.value));
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems,
      currentPage: allItems
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const headerHeight = computed(() => headers.value.length * 56);
    const {
      containerRef,
      paddingTop,
      paddingBottom,
      computedItems,
      handleItemResize,
      handleScroll
    } = useVirtual(props, flatItems, headerHeight);
    const displayItems = computed(() => computedItems.value.map((item) => item.raw));
    useOptions({
      sortBy,
      page: shallowRef(1),
      itemsPerPage: shallowRef(-1),
      groupBy,
      search
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      sortBy: sortBy.value,
      toggleSort,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: allItems.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const [dataTableHeadersProps] = VDataTableHeaders.filterProps(props);
      const [dataTableRowsProps] = VDataTableRows.filterProps(props);
      const [tableProps] = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        wrapper: () => createVNode("div", {
          "ref": containerRef,
          "onScroll": handleScroll,
          "class": "v-table__wrapper",
          "style": {
            height: convertToUnit(props.height)
          }
        }, [createVNode("table", null, [createVNode("thead", null, [createVNode(VDataTableHeaders, mergeProps(dataTableHeadersProps, {
          "sticky": props.fixedHeader
        }), slots)]), createVNode("tbody", null, [createVNode("tr", {
          "style": {
            height: convertToUnit(paddingTop.value),
            border: 0
          }
        }, [createVNode("td", {
          "colspan": columns.value.length,
          "style": {
            height: convertToUnit(paddingTop.value),
            border: 0
          }
        }, null)]), createVNode(VDataTableRows, mergeProps(dataTableRowsProps, {
          "items": displayItems.value
        }), {
          ...slots,
          item: (itemSlotProps) => createVNode(VVirtualScrollItem, {
            "key": itemSlotProps.item.index,
            "renderless": true,
            "onUpdate:height": (height) => handleItemResize(itemSlotProps.item.index, height)
          }, {
            default: (_ref2) => {
              var _a;
              let {
                itemRef
              } = _ref2;
              return ((_a = slots.item) == null ? void 0 : _a.call(slots, {
                ...itemSlotProps,
                itemRef
              })) ?? createVNode(VDataTableRow, mergeProps(itemSlotProps.props, {
                "ref": itemRef,
                "key": itemSlotProps.item.index
              }), slots);
            }
          })
        }), createVNode("tr", {
          "style": {
            height: convertToUnit(paddingBottom.value),
            border: 0
          }
        }, [createVNode("td", {
          "colspan": columns.value.length,
          "style": {
            height: convertToUnit(paddingBottom.value),
            border: 0
          }
        }, null)])])])]),
        bottom: () => {
          var _a;
          return (_a = slots.bottom) == null ? void 0 : _a.call(slots, slotProps.value);
        }
      });
    });
  }
});

// node_modules/vuetify/lib/labs/VDataTable/VDataTableServer.mjs
var makeVDataTableServerProps = propsFactory({
  itemsLength: {
    type: [Number, String],
    required: true
  },
  ...makeDataTablePaginateProps(),
  ...makeDataTableProps(),
  ...makeVDataTableFooterProps()
}, "VDataTableServer");
var VDataTableServer = genericComponent()({
  name: "VDataTableServer",
  props: makeVDataTableServerProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:page": (page) => true,
    "update:itemsPerPage": (page) => true,
    "update:sortBy": (sortBy) => true,
    "update:options": (options) => true,
    "update:expanded": (options) => true,
    "update:groupBy": (value) => true,
    "click:row": (e, value) => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      groupBy
    } = createGroupBy(props);
    const {
      sortBy,
      multiSort,
      mustSort
    } = createSort(props);
    const {
      page,
      itemsPerPage
    } = createPagination(props);
    const itemsLength = computed(() => parseInt(props.itemsLength, 10));
    const {
      columns,
      headers
    } = createHeaders(props, {
      groupBy,
      showSelect: toRef(props, "showSelect"),
      showExpand: toRef(props, "showExpand")
    });
    const {
      items
    } = useDataTableItems(props, columns);
    const {
      toggleSort
    } = provideSort({
      sortBy,
      multiSort,
      mustSort,
      page
    });
    const {
      opened,
      isGroupOpen,
      toggleGroup,
      extractRows
    } = provideGroupBy({
      groupBy,
      sortBy
    });
    const {
      pageCount,
      setItemsPerPage
    } = providePagination({
      page,
      itemsPerPage,
      itemsLength
    });
    const {
      flatItems
    } = useGroupedItems(items, groupBy, opened);
    const {
      isSelected,
      select,
      selectAll,
      toggleSelect,
      someSelected,
      allSelected
    } = provideSelection(props, {
      allItems: items,
      currentPage: items
    });
    const {
      isExpanded,
      toggleExpand
    } = provideExpanded(props);
    const itemsWithoutGroups = computed(() => extractRows(items.value));
    useOptions({
      page,
      itemsPerPage,
      sortBy,
      groupBy,
      search: toRef(props, "search")
    });
    provide("v-data-table", {
      toggleSort,
      sortBy
    });
    provideDefaults({
      VDataTableRows: {
        hideNoData: toRef(props, "hideNoData"),
        noDataText: toRef(props, "noDataText"),
        loading: toRef(props, "loading"),
        loadingText: toRef(props, "loadingText")
      }
    });
    const slotProps = computed(() => ({
      page: page.value,
      itemsPerPage: itemsPerPage.value,
      sortBy: sortBy.value,
      pageCount: pageCount.value,
      toggleSort,
      setItemsPerPage,
      someSelected: someSelected.value,
      allSelected: allSelected.value,
      isSelected,
      select,
      selectAll,
      toggleSelect,
      isExpanded,
      toggleExpand,
      isGroupOpen,
      toggleGroup,
      items: itemsWithoutGroups.value,
      groupedItems: flatItems.value,
      columns: columns.value,
      headers: headers.value
    }));
    useRender(() => {
      const [dataTableFooterProps] = VDataTableFooter.filterProps(props);
      const [dataTableHeadersProps] = VDataTableHeaders.filterProps(props);
      const [dataTableRowsProps] = VDataTableRows.filterProps(props);
      const [tableProps] = VTable.filterProps(props);
      return createVNode(VTable, mergeProps({
        "class": ["v-data-table", {
          "v-data-table--loading": props.loading
        }, props.class],
        "style": props.style
      }, tableProps), {
        top: () => {
          var _a;
          return (_a = slots.top) == null ? void 0 : _a.call(slots, slotProps.value);
        },
        default: () => {
          var _a, _b, _c, _d;
          return slots.default ? slots.default(slotProps.value) : createVNode(Fragment, null, [(_a = slots.colgroup) == null ? void 0 : _a.call(slots, slotProps.value), createVNode("thead", {
            "class": "v-data-table__thead",
            "role": "rowgroup"
          }, [createVNode(VDataTableHeaders, mergeProps(dataTableHeadersProps, {
            "sticky": props.fixedHeader
          }), slots)]), (_b = slots.thead) == null ? void 0 : _b.call(slots, slotProps.value), createVNode("tbody", {
            "class": "v-data-table__tbody",
            "role": "rowgroup"
          }, [slots.body ? slots.body(slotProps.value) : createVNode(VDataTableRows, mergeProps(dataTableRowsProps, {
            "items": flatItems.value
          }), slots)]), (_c = slots.tbody) == null ? void 0 : _c.call(slots, slotProps.value), (_d = slots.tfoot) == null ? void 0 : _d.call(slots, slotProps.value)]);
        },
        bottom: () => slots.bottom ? slots.bottom(slotProps.value) : createVNode(VDataTableFooter, dataTableFooterProps, {
          prepend: slots["footer.prepend"]
        })
      });
    });
  }
});
export {
  VDataTable,
  VDataTableFooter,
  VDataTableRow,
  VDataTableRows,
  VDataTableServer,
  VDataTableVirtual
};
//# sourceMappingURL=vuetify_labs_VDataTable.js.map
