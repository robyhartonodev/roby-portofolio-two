export const state = () => ({
  isDarkMode: true
});

export const mutations = {
  switchDarkMode (state) {
    state.isDarkMode = !state.isDarkMode;

    // Toggle theme
    localStorage.theme = state.isDarkMode ? 'dark' : 'light';

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};
