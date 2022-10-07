async function doFetch(URL, method, body) {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(URL, options);

  const resBody = await response.json();
  const error = response.ok ? null : resBody;
  const data = response.ok ? resBody : null;

  return { data, error };
}

export const get = (url) => doFetch(url, 'GET');
export const post = (url, body) => doFetch(url, 'POST', body);
export const put = (url, body) => doFetch(url, 'PUT', body);
export const del = (url) => doFetch(url, 'DELETE');
