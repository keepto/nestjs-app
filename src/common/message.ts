export var MESSAGE = {
  ERROR: (message, errorInfo, data = [] || {}) => {
    return { code: -100, message, errorInfo, data };
  },
  SUCCESS: (message, data = [] || {}) => {
    return { code: 0, message, data };
  },
};
