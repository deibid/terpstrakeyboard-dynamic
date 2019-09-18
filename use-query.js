import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

// todo return null if no query string?
// todo default to string if not provided?
export class Extract {
  constructor(from, to) {
    this.to = to;
    this.from = from;
  }
  extract(query, key) {
    if (query.has(key)) {
      return this.from(query.get(key));
    } else {
      return null;
    }
  }
  insert(query, key, value) {
    query.set(key, this.to(value));
  }
}

export class ExtractArray {
  constructor(from, to) {
    this.to = to;
    this.from = from;
  }

  extract(query, key) {
    if (query.has(key)) {
      return query.getAll(key).map(this.from);
    } else {
      return null;
    }
  }
  insert(query, key, values) {
    values.map(v).forEach(v => query.append(key, v));
  }
}

export const ExtractString = new Extract(x => x, x => x);
export const ExtractStringArray = new ExtractArray(x => x, x => x);
export const ExtractFloat = new Extract(x => Number.parseFloat(x), x => x.toString());
export const ExtractFloatArray = new Extract(x => Number.parseFloat(x), x => x.toString());
export const ExtractInt = new Extract(x => Number.parseInt(x), x => x.toString());
export const ExtractIntArray = new Extract(x => Number.parseInt(x), x => x.toString());
export const ExtractBool = new Extract(x => x === "true", x => x.toString());
export const ExtractBoolArray = new Extract(x => x === "true", x => x.toString());

export function useQuery(spec) {
  const [values, setValues] = useState({});

  function handle(e) {
    const query = new URLSearchParams(document.location.search.substring(1));
    const output = {};
    for (let [key, extract] of Object.entries(spec)) {
      if (query.has(key)) {
        output[key] = extract.extract(query, key);
      }
    }
    setValues(output);
  }

  function setState(next_f) {
    const query = new URLSearchParams();
    const next = next_f(values);
    for (let [key, extract] of Object.entries(spec)) {
      if (key in next && next[key]) {
        extract.insert(query, key, next[key]);
      }
    }
    const url = new URL(location.toString());
    url.search = query.toString();
    history.pushState({}, "Terpstra Keyboard WebApp", url);
    setValues(next);
  }

  useEffect(() => {
    handle();
    window.addEventListener('popstate', handle);

    return () => {
      window.removeEventListener('popstate', handle)
    };
  }, []);

  return [values, setState];
}

export default useQuery;
