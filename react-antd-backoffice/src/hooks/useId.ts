import { nanoid } from "nanoid";

/**
 *
 * @param prefix - Prefix to use for the generated id
 * @param size - The length of generated id
 * @returns  A unique id
 */
function useId(prefix?: string, size: number = 10) {
  const id = nanoid(size);
  return prefix ? `${prefix}-${id}` : id;
}

export default useId;
