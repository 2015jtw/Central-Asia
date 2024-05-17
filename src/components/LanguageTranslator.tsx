"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition, useState } from "react";
import { useLocale } from "use-intl";

const LanguageSelector = ({ className }: { className?: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <label className={`border-2 rounded-lg w-[180px] ${className}`}>
      <p className="sr-only">Change Language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2 w-full rounded-lg pl-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option className="w-full" value="en">
          English
        </option>
        <option className="w-full" value="de">
          German
        </option>
      </select>
    </label>
  );
};

export default LanguageSelector;
