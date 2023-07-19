
export function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    const response = await fetch("api_url");
    const data = await response.json();
    resolve({data})
  }
  );
}
