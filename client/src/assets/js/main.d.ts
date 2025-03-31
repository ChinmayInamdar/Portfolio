/**
 * Scrolls to the element with the given ID
 */
export function scrollToElement(elementId: string): void;

/**
 * Validates an email address
 */
export function isValidEmail(email: string): boolean;

/**
 * Form data interface
 */
export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Form errors interface
 */
export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

/**
 * Form validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  errors: FormErrors;
}

/**
 * Form submission result interface
 */
export interface SubmissionResult {
  success: boolean;
  message: string;
}

/**
 * Validates form data
 */
export function validateForm(formData: FormData): ValidationResult;

/**
 * Handles form submission
 */
export function handleFormSubmission(formData: FormData): Promise<SubmissionResult>;

/**
 * Lazy loads images for better performance
 */
export function lazyLoadImages(): void;

/**
 * Returns the current year
 */
export function getCurrentYear(): number;