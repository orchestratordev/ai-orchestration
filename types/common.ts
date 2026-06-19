/**
 * AI ORCHESTRATION PLATFORM
 * Common Types
 */

export type ID = string;

export type ISODateString = string;

export interface BaseEntity {
  id: ID;

  createdAt: ISODateString;

  updatedAt: ISODateString;
}
