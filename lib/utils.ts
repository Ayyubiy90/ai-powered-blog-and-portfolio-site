// Importing the 'clsx' library, which is used for conditionally joining class names together.
// The 'ClassValue' type is also imported to define the type of the input parameters.
import { clsx, type ClassValue } from 'clsx';

// Importing the 'twMerge' function from the 'tailwind-merge' library.
// This function is used to intelligently merge Tailwind CSS class names, resolving conflicts.
import { twMerge } from 'tailwind-merge';

// Defining a function named 'cn' that takes a variable number of arguments.
// The '...inputs' syntax allows the function to accept any number of ClassValue arguments.
// 'ClassValue' can be a string, an array of strings, or an object with boolean values.
export function cn(...inputs: ClassValue[]) {
  // The function returns the result of merging class names.
  // First, it uses 'clsx' to join the input class names into a single string.
  // Then, it passes that string to 'twMerge' to handle any Tailwind CSS class conflicts.
  return twMerge(clsx(inputs));
}