function useAuth(): boolean {
  const isAuth = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("auth="))
    ?.split("=")[1];
    console.log(isAuth);
  return Boolean(isAuth);
}

export default useAuth;
