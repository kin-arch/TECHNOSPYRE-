// Pricing configuration data
// Synchronized with root pricing-config.json

export type ModulePricing = {
  id: string;
  name: string;
  setupFee: number;
  monthlyFee: number;
  description: string;
  isAddon?: boolean;
};

export type FullSuitePricing = {
  implementationFee: number;
  monthlyMaintenanceFee: number;
  includes: string[];
  benefits?: string[];
};

export type PricingRules = {
  minimumModulesForPurchase: number;
  bulkDiscounts: { threshold: number; discountPercentage: number }[];
  customDevelopment?: {
    hourlyRate: number;
    minProjectFee: number;
    estimatedComplexityLevels: {
      low: { hours: string; baseCost: number };
      medium: { hours: string; baseCost: number };
      high: { hours: string; baseCost: number; customQuote: boolean };
    };
  };
};

export type ProductPricing = {
  id: string;
  name: string;
  displayName: string;
  fullSuite: FullSuitePricing;
  modules: ModulePricing[];
  pricingRules: PricingRules;
};

export type PricingConfig = {
  pricingVersion: string;
  lastUpdated: string;
  currency: string;
  products: ProductPricing[];
  configuration: {
    annualContractDiscount: number;
    educationalInstitutionDiscount: number;
    governmentDiscount: number;
    nonProfitDiscount: number;
  };
};

// Import pricing data from JSON
import pricingJson from './pricing-config.json';

export const pricingData: PricingConfig = pricingJson as PricingConfig;

// Helper to get pricing for a specific product
export function getProductPricing(productId: string): ProductPricing | undefined {
  return pricingData.products.find((p) => p.id === productId);
}

// Format PKR currency
export function formatPKR(amount: number): string {
  return new Intl.NumberFormat('en-PK').format(amount);
}
