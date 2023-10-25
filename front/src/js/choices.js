import Choices from "choices.js";

const toggles = document.querySelectorAll("[data-choices]");

toggles.forEach((toggle) => {
  const elementOptions = toggle.dataset.choices
    ? JSON.parse(toggle.dataset.choices)
    : {};
  const defaultOptions = {
    classNames: {
      containerInner: toggle.className,
      input: "form-control",
      inputCloned: "form-control-sm",
      listDropdown: "dropdown-menu",
      itemChoice: "dropdown-item",
      activeState: "show",
      selectedState: "active",
    },
    shouldSort: false,
    callbackOnCreateTemplates: function (template) {
      return {
        choice: (classNames, data) => {
          const classes = `${classNames.item} ${classNames.itemChoice} ${
            data.disabled ? classNames.itemDisabled : classNames.itemSelectable
          }`;
          const disabled = data.disabled
            ? 'data-choice-disabled aria-disabled="true"'
            : "data-choice-selectable";
          const role = data.groupId > 0 ? 'role="treeitem"' : 'role="option"';
          const selectText = this.config.itemSelectText;

          // 수정된 부분: "label" 필드만 사용
          const label = data.label;

          return template(`
            <div class="${classes}" data-select-text="${selectText}" data-choice ${disabled} data-id="${data.id}" data-value="${data.value}" ${role}>
              ${label}
            </div>
          `);
        },
      };
    },
  };

  const options = {
    ...elementOptions,
    ...defaultOptions,
    maxItemCount: 1,
  };

  new Choices(toggle, options);
});

// Make available globally
window.Choices = Choices;
