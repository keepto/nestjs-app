export var MESSAGE = {
  ERROR: (m, info, data = [] || {}) => {
    return { code: -100, message: m, errorInfo: info, data: data };
  },
  SUCCESS: (m, data = [] || {}) => {
    return { code: 0, message: m, data: data };
  },
};
