/**
 * Application Constants
 * Central location for all application-wide constants
 */

// Environment
const ENVIRONMENT = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
};

// HTTP Status Codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  SERVICE_UNAVAILABLE: 503,
};

// API Response Messages
const API_MESSAGES = {
  SUCCESS: 'Operation completed successfully',
  CREATED: 'Resource created successfully',
  UPDATED: 'Resource updated successfully',
  DELETED: 'Resource deleted successfully',
  NOT_FOUND: 'Resource not found',
  INVALID_REQUEST: 'Invalid request parameters',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Access forbidden',
  SERVER_ERROR: 'Internal server error',
  VALIDATION_ERROR: 'Validation failed',
};

// Authentication
const AUTH = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'your-secret-key',
  JWT_EXPIRE_IN: process.env.JWT_EXPIRE_IN || '7d',
  REFRESH_TOKEN_EXPIRE_IN: process.env.REFRESH_TOKEN_EXPIRE_IN || '30d',
  TOKEN_TYPE: 'Bearer',
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_RESET_TOKEN_EXPIRE: 3600000, // 1 hour in milliseconds
};

// Pagination
const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
  MIN_LIMIT: 1,
};

// Rate Limiting
const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 100,
  MESSAGE: 'Too many requests from this IP, please try again later.',
};

// Database
const DATABASE = {
  CONNECTION_TIMEOUT: 5000,
  QUERY_TIMEOUT: 30000,
  MAX_POOL_SIZE: 10,
  MIN_POOL_SIZE: 2,
};

// Cache
const CACHE = {
  DEFAULT_TTL: 3600, // 1 hour in seconds
  SESSION_TTL: 86400, // 24 hours in seconds
  REDIS_KEY_PREFIX: 'saas:',
};

// File Upload
const FILE_UPLOAD = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5 MB
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx'],
  UPLOAD_DIRECTORY: 'uploads/',
};

// Email
const EMAIL = {
  FROM: process.env.EMAIL_FROM || 'noreply@saas.com',
  SMTP_HOST: process.env.SMTP_HOST || 'localhost',
  SMTP_PORT: process.env.SMTP_PORT || 587,
  VERIFICATION_EMAIL_EXPIRE: 24 * 60 * 60 * 1000, // 24 hours
};

// User Roles
const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
  MODERATOR: 'moderator',
};

// User Status
const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended',
  PENDING_VERIFICATION: 'pending_verification',
};

// Validation Rules
const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[1-9]\d{1,14}$/,
  URL_REGEX: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
};

// Error Types
const ERROR_TYPES = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  DUPLICATE_ENTRY_ERROR: 'DUPLICATE_ENTRY_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  EXTERNAL_API_ERROR: 'EXTERNAL_API_ERROR',
};

// Success Response Codes
const SUCCESS_CODES = {
  USER_CREATED: 'USER_001',
  USER_LOGGED_IN: 'USER_002',
  PASSWORD_RESET: 'USER_003',
  EMAIL_VERIFIED: 'USER_004',
};

// Logging
const LOGGING = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FORMAT: 'combined',
  LOG_DIR: 'logs/',
};

// Server
const SERVER = {
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || 'localhost',
  API_VERSION: 'v1',
  API_BASE_PATH: '/api/v1',
};

// Export all constants
module.exports = {
  ENVIRONMENT,
  HTTP_STATUS,
  API_MESSAGES,
  AUTH,
  PAGINATION,
  RATE_LIMIT,
  DATABASE,
  CACHE,
  FILE_UPLOAD,
  EMAIL,
  USER_ROLES,
  USER_STATUS,
  VALIDATION,
  ERROR_TYPES,
  SUCCESS_CODES,
  LOGGING,
  SERVER,
};
