"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, TrendingUp, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { flag } from "@/shared/others";
import { useTranslations } from "next-intl";

// Define types for currency data
interface CurrencyCode {
  code: string;
  country: string;
  flag: any;
}

// Define continent mapping type
interface ContinentMapping {
  [country: string]: string;
}

// Define grouped currencies type
interface GroupedCurrencies {
  [continent: string]: CurrencyCode[];
}

// Define chart data type
interface ChartDataPoint {
  date: string;
  rate: number;
}

// Define currency exchange rates type
interface ExchangeRates {
  [currencyCode: string]: number;
}

// Define API response interface
interface ApiResponse {
  status: string;
  data: {
    code: string;
    rate: string;
    name: string;
    region: string;
  }[];
}

interface Currency {
  code: string;
  flag: string;
}

interface CurrencyTickerProps {
  currencies: Currency[];
  rates: Record<string, number>;
  baseCurrency: string;
  onSelectCurrency?: (currency: Currency) => void;
  isLoading: boolean;
}

// Currency Slider Component
const CurrencyTicker: React.FC<CurrencyTickerProps> = ({
  currencies,
  rates,
  baseCurrency,
  onSelectCurrency,
  isLoading,
}) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [duplicatedCurrencies, setDuplicatedCurrencies] = useState<Currency[]>(
    []
  );
  const [animationPaused, setAnimationPaused] = useState(false);

  // Get exchange rate from base to target currency
  const getRate = (targetCurrency: string): string => {
    if (!rates || !rates[targetCurrency]) {
      return "...";
    }
    return rates[targetCurrency].toFixed(2);
  };

  // Duplicate currencies array to create seamless loop
  useEffect(() => {
    // Duplicate the currencies to ensure continuous scrolling
    setDuplicatedCurrencies([...currencies, ...currencies]);
  }, [currencies]);

  // Setup the animation and handle pausing on hover
  useEffect(() => {
    if (!tickerRef.current || !containerRef.current) return;

    // Calculate animation duration based on number of items
    // More items = longer duration for smooth scrolling
    const animationDuration = duplicatedCurrencies.length * 3; // 3 seconds per item

    // Apply animation
    tickerRef.current.style.animationDuration = `${animationDuration}s`;
    tickerRef.current.style.animationTimingFunction = "linear";
    tickerRef.current.style.animationIterationCount = "infinite";
    tickerRef.current.style.animationName = "ticker-scroll";

    // Create the keyframe animation
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @keyframes ticker-scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(styleSheet);

    // Pause animation on hover
    const container = containerRef.current;
    const handleMouseEnter = () => setAnimationPaused(true);
    const handleMouseLeave = () => setAnimationPaused(false);

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      document.head.removeChild(styleSheet);
    };
  }, [duplicatedCurrencies.length]);

  // Update animation state when paused state changes
  useEffect(() => {
    if (!tickerRef.current) return;

    tickerRef.current.style.animationPlayState = animationPaused
      ? "paused"
      : "running";
  }, [animationPaused]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-3">
      <div
        ref={tickerRef}
        className="inline-flex"
        style={{ whiteSpace: "nowrap" }}
      >
        {duplicatedCurrencies.map((currency, index) => (
          <div
            key={`${currency.code}-${index}`}
            className="inline-block px-1 md:px-2 cursor-pointer"
            onClick={() => onSelectCurrency && onSelectCurrency(currency)}
          >
            <div className="bg-white rounded-lg flex items-center gap-2 shadow-sm hover:shadow-md px-3 md:px-4 py-2 transition-all">
              <span className="text-xl">{currency.flag}</span>
              <div className="text-sm md:text-sm font-semibold">
                {isLoading ? (
                  <div className="h-5 w-24 bg-gray-100 animate-pulse rounded"></div>
                ) : (
                  <>
                    1 {baseCurrency} = {getRate(currency.code)} {currency.code}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CurrencyExchange: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState<string>("AED");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [fromAmount, setFromAmount] = useState<number>(1000);
  const [toAmount, setToAmount] = useState<string>("0");
  const [rate, setRate] = useState<number>(0);
  const [timeframe] = useState<string>("30d");
  const [error, setError] = useState<string | null>(null);
  const [allRates, setAllRates] = useState<ExchangeRates>({});
  const [sliderBaseCurrency] = useState<string>("AED");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const t = useTranslations('graph')
  // Get currency details from code
  const getCurrencyDetails = (code: string): CurrencyCode => {
    return (
      currencyCodes.find((currency) => currency.code === code) || {
        code: code,
        country: "Unknown",
        flag: "🏳️",
      }
    );
  };

  // Get flag for currency code
  const getCurrencyFlag = (code: string): string => {
    const currency = getCurrencyDetails(code);
    return currency.flag;
  };

  // Define currency codes with country and flag information
const currencyCodes: CurrencyCode[] = [
  { code: "USD", country: "United States", flag: flag.USD },
  { code: "EUR", country: "European Union", flag: flag.EUR },
  { code: "GBP", country: "United Kingdom", flag:flag.GBP },
  { code: "CHF", country: "Switzerland", flag:flag.CHF },
  { code: "JPY", country: "Japan", flag: flag.JPY },
  { code: "CNY", country: "China", flag:flag.CNY },
  { code: "CAD", country: "Canada", flag: flag.CAD },
  { code: "AUD", country: "Australia", flag: flag.AUD },
  { code: "SGD", country: "Singapore", flag: flag.SGD },
  { code: "SAR", country: "Saudi Arabia", flag: flag.SAR },
  { code: "INR", country: "India", flag: flag.INR },
  { code: "PKR", country: "Pakistan", flag: flag.PKR },
  { code: "BDT", country: "Bangladesh", flag: flag.BDT },
  { code: "PHP", country: "Philippines", flag: flag.PHP},
  { code: "OMR", country: "Oman", flag:flag.OMR },
  { code: "BHD", country: "Bahrain", flag: flag.BHD },
  { code: "JOD", country: "Jordan", flag:flag.JOD },
  { code: "KWD", country: "Kuwait", flag: flag.KWD },
  { code: "AED", country: "United Arab Emirates", flag: flag.AED},
];

const continentMapping: ContinentMapping = {
  "United States": "North America",
  Canada: "North America",
  "United Kingdom": "Europe",
  "European Union": "Europe",
  Switzerland: "Europe",
  Japan: "Asia",
  China: "Asia",
  Australia: "Oceania",
  Singapore: "Asia",
  "Saudi Arabia": "Asia",
  India: "Asia",
  Pakistan: "Asia",
  Bangladesh: "Asia",
  Philippines: "Asia",
  Oman: "Asia",
  Bahrain: "Asia",
  Jordan: "Asia",
  Kuwait: "Asia",
  "United Arab Emirates": "Asia",
};

// Group currencies for the select dropdown
const groupedCurrencies: GroupedCurrencies = currencyCodes.reduce(
  (acc: GroupedCurrencies, item) => {
    // Determine continent (default to "Other" if not found)
    const continent = continentMapping[item.country] || "Other";

    if (!acc[continent]) {
      acc[continent] = [];
    }

    acc[continent].push({
      code: item.code,
      country: item.country,
      flag: item.flag,
    });

    return acc;
  },
  {}
);

  // Fetch all exchange rates for the slider
  useEffect(() => {
    const fetchAllRates = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await fetch("https://admin.alfaexchange.net/api/currencies");
        const data: ApiResponse = await response.json();

        if (data && data.status === "success" && data.data.length > 0) {
          // Create exchange rates object
          const rates: ExchangeRates = {};
          data.data.forEach(item => {
            rates[item.code] = parseFloat(item.rate);
          });
          setAllRates(rates);
          
          // Calculate conversion rate if we have both currencies
          if (rates[fromCurrency] && rates[toCurrency]) {
            const conversionRate = rates[toCurrency] / rates[fromCurrency];
            setRate(conversionRate);
            setToAmount((fromAmount * conversionRate).toFixed(2));
          }
          setIsLoading(false);
        } else {
          throw new Error("Invalid response from API");
        }
      } catch (err) {
        console.error("Error fetching all rates:", err);
        setError("Using estimated rates");
        setIsLoading(false);
      }
    };

    fetchAllRates();

    // Refresh rates every 5 minutes
    const intervalId = setInterval(fetchAllRates, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [sliderBaseCurrency]);

  // Update conversion rate when currencies change
  useEffect(() => {
    if (allRates[fromCurrency] && allRates[toCurrency]) {
      const conversionRate = allRates[toCurrency] ;
      setRate(conversionRate);
      setToAmount((fromAmount * conversionRate).toFixed(2));
    }
  }, [fromCurrency, toCurrency]);

  // Update to amount when from amount changes
  useEffect(() => {
    setToAmount((fromAmount * rate).toFixed(2));
  }, [fromAmount, rate]);

  const handleFromAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = parseFloat(e.target.value) || 0;
    setFromAmount(value);
  };

  const handleToAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = parseFloat(e.target.value) || 0;
    setToAmount(value.toString());
    setFromAmount(parseFloat((value / rate).toFixed(2)));
  };

  return (
    <div className="container mx-auto mt-6 bg-bg-faded-blue">
      <Card className="shadow-md overflow-hidden py-0 rounded-2xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 py-2 px-4 md:px-6">
          <CurrencyTicker
            currencies={currencyCodes}
            rates={allRates}
            baseCurrency={sliderBaseCurrency}
            isLoading={isLoading}
          />
        </CardHeader>

        <CardContent className="p-3 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {/* From Currency Section */}
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{getCurrencyFlag(fromCurrency)}</span>
                <label className="font-medium text-gray-700">{t('from')}</label>
              </div>
              <div className=" item-center border-input w-full   dark:hover:bg-input/50 flex items-center gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs ">
                🇦🇪 <p className="text-sm">United Arab Emirates</p>
              </div>

              <Input
                className="text-sm md:text-lg font-medium border-2 focus-visible:ring-blue-400"
                value={fromAmount}
                onChange={handleFromAmountChange}
                type="number"
                placeholder="Amount"
              />
            </div>

            {/* Swap Button */}
            <div className="flex items-center justify-center">
              <Button
                className="rounded-full h-12 w-12 cursor-pointer "
                variant="primary"
              >
                <ArrowRight className="rotate-90 sm:rotate-0" />
              </Button>
            </div>

            {/* To Currency Section */}
            <div className="md:col-span-2 space-y-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{getCurrencyFlag(toCurrency)}</span>
                <label className="font-medium text-gray-700">{t('to')}</label>
              </div>

              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  {Object.keys(groupedCurrencies)
                    .sort()
                    .map((region) => (
                      <SelectGroup key={region}>
                        <SelectItem
                          value={region}
                          disabled
                          className="font-semibold text-sm text-gray-500"
                        >
                          {region}
                        </SelectItem>
                        {groupedCurrencies[region]
                          .sort((a, b) => a.code.localeCompare(b.code))
                          .map((item) => (
                            <SelectItem
                              key={`${item.code}-${item?.country}`}
                              value={item.code}
                            >
                              <div className="flex items-center gap-2">
                                <span>{item.flag}</span>
                                <span>
                                  {item.code} - {item?.country}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    ))}
                </SelectContent>
              </Select>

              <Input
                className="text-sm md:text-lg font-medium border-2 focus-visible:ring-green-400"
                value={toAmount}
                onChange={handleToAmountChange}
                type="number"
                placeholder="Amount"
              />
            </div>
          </div>

          {/* Exchange Rate Display */}
          <div className="bg-gray-50 rounded-lg p-2 md:p-4 flex flex-col sm:flex-row items-center justify-between">
            <div>
              <div className="flex text-sm md:text-base items-center gap-2">
                <TrendingUp size={20} className="text-blue-600" />
                <h3 className="font-medium">{t('rate')}</h3>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="md:text-xl">{getCurrencyFlag(fromCurrency)}</span>
                <p className="md:text-2xl font-bold">
                  1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
                </p>
                <span className="md:text-xl">{getCurrencyFlag(toCurrency)}</span>
              </div>
            </div>

            {error && (
              <div className="mt-2 sm:mt-0 flex items-center gap-1 text-amber-600 text-sm">
                <AlertCircle size={16} />
                {error}
              </div>
            )}
          </div>

          <div className="flex items-baseline flex-wrap gap-1">
            <p className="mt-3 text-sm italic text-blue-700">
            {t('des')}
            </p>
            <Link
              className="hover:underline text-violo text-sm text-violote font-semibold"
              href={"mailto:info@alfaexchange.com"}
            >
              info@alfaexchange.com
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CurrencyExchange;