"use client";

import { useState, useRef } from "react";
import CpmInsights from "./CpmInsights";

type FieldName = "totalCost" | "impressions" | "cpm";

export default function CpmCalculator() {
  const [values, setValues] = useState<Record<FieldName, string>>({
    totalCost: "",
    impressions: "",
    cpm: "",
  });
  const [errors, setErrors] = useState<Record<FieldName, string>>({
    totalCost: "",
    impressions: "",
    cpm: "",
  });
  const [computed, setComputed] = useState<FieldName | null>(null);
  const lastComputed = useRef<FieldName | null>(null);

  const validate = (raw: string): number | null => {
    if (raw === "") return null;
    const n = Number(raw);
    if (isNaN(n) || n <= 0) return null;
    return n;
  };

  const handleChange = (name: FieldName, raw: string) => {
    if (raw === "") {
      setErrors((e) => ({ ...e, [name]: "" }));
      setValues((v) => ({ ...v, [name]: "" }));
      return;
    }

    const n = Number(raw);
    if (isNaN(n) || n < 0) {
      setErrors((e) => ({ ...e, [name]: "Please enter a positive number." }));
      setValues((v) => ({ ...v, [name]: raw }));
      return;
    }
    if (n === 0) {
      setErrors((e) => ({ ...e, [name]: "Value must be greater than zero." }));
      setValues((v) => ({ ...v, [name]: raw }));
      return;
    }

    setErrors((e) => ({ ...e, [name]: "" }));
    setValues((v) => ({ ...v, [name]: raw }));
  };

  const handleCalculate = () => {
    const tc = validate(values.totalCost);
    const imp = validate(values.impressions);
    const cpm = validate(values.cpm);

    const filled: FieldName[] = [];
    if (tc !== null) filled.push("totalCost");
    if (imp !== null) filled.push("impressions");
    if (cpm !== null) filled.push("cpm");

    if (filled.length < 2) {
      setComputed(null);
      lastComputed.current = null;
      return;
    }

    let target: FieldName;

    if (filled.length === 2) {
      const allFields: FieldName[] = ["totalCost", "impressions", "cpm"];
      target = allFields.find((f) => !filled.includes(f))!;
    } else {
      if (lastComputed.current && filled.includes(lastComputed.current)) {
        target = lastComputed.current;
      } else {
        target = "cpm";
      }
    }

    let result: number;
    const updated = { ...values };

    if (target === "cpm") {
      const t = validate(updated.totalCost)!;
      const i = validate(updated.impressions)!;
      result = (t / i) * 1000;
      updated.cpm = result.toFixed(2);
    } else if (target === "totalCost") {
      const c = validate(updated.cpm)!;
      const i = validate(updated.impressions)!;
      result = (c * i) / 1000;
      updated.totalCost = result.toFixed(2);
    } else {
      const t = validate(updated.totalCost)!;
      const c = validate(updated.cpm)!;
      result = (t / c) * 1000;
      updated.impressions = Math.round(result).toString();
    }

    lastComputed.current = target;
    setComputed(target);
    setValues(updated);
  };

  const handleReset = () => {
    setValues({ totalCost: "", impressions: "", cpm: "" });
    setErrors({ totalCost: "", impressions: "", cpm: "" });
    setComputed(null);
    lastComputed.current = null;
  };

  const cpmValue = computed === "cpm" ? Number(values.cpm) : (values.cpm ? Number(values.cpm) : null);
  const showInsights = cpmValue !== null && cpmValue > 0 && !isNaN(cpmValue);

  return (
    <div>
      <div className="mx-auto max-w-[560px] rounded-xl bg-surface p-6 shadow-[0_2px_12px_rgba(0,0,0,0.08)] sm:p-8">
        <div className="space-y-4">
          <Field
            label="Total Ad Spend"
            name="totalCost"
            value={values.totalCost}
            placeholder="e.g. 500"
            prefix="$"
            error={errors.totalCost}
            isComputed={computed === "totalCost"}
            onChange={(v) => handleChange("totalCost", v)}
          />
          <Field
            label="Total Impressions"
            name="impressions"
            value={values.impressions}
            placeholder="e.g. 200000"
            error={errors.impressions}
            isComputed={computed === "impressions"}
            onChange={(v) => handleChange("impressions", v)}
          />
          <Field
            label="CPM Result"
            name="cpm"
            value={values.cpm}
            placeholder="e.g. 2.50"
            prefix="$"
            error={errors.cpm}
            isComputed={computed === "cpm"}
            onChange={(v) => handleChange("cpm", v)}
          />
        </div>

        <div className="mt-6 flex gap-3 justify-end">
          <button
            type="button"
            onClick={handleReset}
            className="cursor-pointer rounded-[10px] border border-border px-5 py-2.5 text-sm font-medium text-text-2 transition-colors duration-200 hover:border-primary hover:text-primary min-h-[44px]"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={handleCalculate}
            className="cursor-pointer rounded-[10px] bg-primary px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-hover min-h-[44px]"
          >
            Calculate
          </button>
        </div>
      </div>

      {showInsights && <CpmInsights cpm={cpmValue!} />}
    </div>
  );
}

function Field({
  label,
  name,
  value,
  placeholder,
  prefix,
  error,
  isComputed,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  prefix?: string;
  error: string;
  isComputed: boolean;
  onChange: (v: string) => void;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-text-1">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-2">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          step="any"
          min="0"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-[10px] border px-3 py-3 text-base text-text-1 outline-none transition-all duration-200 min-h-[44px] ${
            prefix ? "pl-7" : ""
          } ${
            error
              ? "border-error"
              : isComputed
              ? "border-primary bg-primary-bg"
              : "border-border bg-bg"
          } focus:border-primary focus:ring-2 focus:ring-primary/20`}
        />
      </div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
