window.onload = () => {
    const body = document.body;
    const c = setTimeout(() => {
      body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };