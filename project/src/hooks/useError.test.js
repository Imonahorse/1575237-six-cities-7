import React from 'react';
import useError from "./useError";
import {renderHook} from "@testing-library/react-hooks";

describe('Hook: useError', () => {
  it('should return Error component', () => {
    const fakeState = {isError: true, isSuccess: false, isLoading: false};
    const {result} = renderHook(() => useError(fakeState));
    const fakeErrorComponent = result.current;

    expect(fakeErrorComponent).toBeInstanceOf(Function);
  });

  it('should return null', () => {
    const fakeState = {isError: false, isSuccess: false, isLoading: false};
    const {result} = renderHook(() => useError(fakeState));
    const error = result.current;

    expect(error).toBe(null);
  })
});
