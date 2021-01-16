const componentsReducerDefaultState = {
  activeContent: 1,
  component: null,
  text: {
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: false,
    desktop: true,
  },
  image: {
    file: null,
    link: null,
    info: null,
    align: "center",
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: false,
    desktop: true,
  },
  gif: {
    file: null,
    sourceURL: {
      link: {
        icon: "Link",
        input: "http://",
      },
    },
    gifURL: {
      link: {
        icon: "Link",
        input: "http://",
      },
    },
    gifText: {
      link: {
        icon: "Alt",
        input: "Alt",
      },
    },
    align: "left",
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: true,
    desktop: false,
  },
  button: {
    file: null,
    link: null,
    align: "left",
    buttonURL: {
      link: {
        icon: "Link",
        input: "http://www.google.com",
      },
    },
    properties: {
      buttonColor: "#D5D42",
      buttonTextColor: "#FFFFFF",
      borderRadius: "5",
    },
    marginTop: "15",
    marginBottom: "15",
    marginLeft: "15",
    marginRight: "15",
    mobile: true,
    desktop: false,
  },
  divider: {
    style: "1px solid #D7D7D7",
    background: null,
    verticalMargin: "15",
    horizontalMargin: "0",
    mobile: true,
    desktop: false,
  },
  spacer: {
    background: null,
    height: "15",
    mobile: true,
    desktop: false,
  },
  video: {
    properties: {
      url: null,
      text: "Alt text",
    },
    imageSize: "300",
    margin: "15",
    mobile: true,
    desktop: false,
  },
};

const componentsReducer = (
  state = componentsReducerDefaultState,
  { type, activeContent, payload, block, prop }
) => {
  switch (type) {
    case "SET_ACTIVE_CONTENT":
      return { ...state, activeContent };
    case "SET_MARGIN_TOP":
      return {
        ...state,
        [block]: {
          ...state[block],
          marginTop: (parseInt(state[block].marginTop) + payload).toString(),
        },
      };
    case "SET_MARGIN_BOTTOM":
      return {
        ...state,
        [block]: {
          ...state[block],
          marginBottom: (
            parseInt(state[block].marginBottom) + payload
          ).toString(),
        },
      };
    case "SET_MARGIN_LEFT":
      return {
        ...state,
        [block]: {
          ...state[block],
          marginLeft: (parseInt(state[block].marginLeft) + payload).toString(),
        },
      };
    case "SET_MARGIN_RIGHT":
      return {
        ...state,
        [block]: {
          ...state[block],
          marginRight: (
            parseInt(state[block].marginRight) + payload
          ).toString(),
        },
      };
    case "SHOW_DESKTOP":
      return {
        ...state,
        [block]: {
          ...state[block],
          desktop: !state[block].desktop,
        },
      };
    case "SHOW_MOBILE":
      return {
        ...state,
        [block]: {
          ...state[block],
          mobile: !state[block].mobile,
        },
      };
    case "SET_URL":
      return {
        ...state,
        [block]: {
          ...state[block],
          [prop]: {
            ...state[block][prop],
            link: {
              ...state[block][prop].link,
              input: payload,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default componentsReducer;
