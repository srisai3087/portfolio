// Simplified version of the toast hook system for JavaScript
import { useState, useEffect } from 'react';

const TOAST_TIMEOUT = 3000;

// Create a unique ID
function genId() {
  return Math.random().toString(36).substring(2, 9);
}

// Action types
const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
};

// Initial state
let memoryState = { toasts: [] };

// Listeners for state changes
const listeners = [];

// State reducer
function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts],
      };
    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case actionTypes.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId || action.toastId === undefined
            ? { ...t, open: false }
            : t
        ),
      };
    case actionTypes.REMOVE_TOAST:
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
}

// Dispatch function to update state
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

// Toast function to create and manage toasts
function toast(props) {
  const id = genId();

  const update = (updatedProps) => {
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...updatedProps, id },
    });

    return {
      id,
      dismiss: () => dismiss(id),
      update,
    };
  };

  const dismiss = (toastId) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId });
  };

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      id,
      open: true,
      ...props,
      onOpenChange: (open) => {
        if (!open) {
          dismiss(id);
        }
      },
    },
  });

  return {
    id,
    dismiss: () => dismiss(id),
    update,
  };
}

// Custom hook for components to use toast functionality
function useToast() {
  const [state, setState] = useState(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

export { toast, useToast };