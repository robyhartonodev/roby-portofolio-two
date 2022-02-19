export const state = () => ({
  isDarkMode: false
});

export const mutations = {
  switchDarkMode (state) {
    state.isDarkMode = !state.isDarkMode;
  }
};
