import { useTranslations } from "next-intl";

export const getTourData = (
  tk: Function,
  k: Function,
  b: Function,
  s: Function,
  kp: Function
) => {
  return [
    {
      title: tk("title"),
      image: "/tashkent.jpg",
      description: tk("description"),
      description2: tk("description2"),
    },
    {
      title: s("title"),
      image: "/samarkand.jpg",
      description: s("description"),
      description2: s("description2"),
    },
    {
      title: b("title"),
      image: "/bukhara.jpg",
      description: b("description"),
      description2: b("description2"),
    },
    {
      title: k("title"),
      image: "/khiva.jpg",
      description: k("description"),
      description2: k("description2"),
    },
    {
      title: kp("title"),
      image: "/karakalpakstan1.jpg",
      description: kp("description"),
      description2: kp("description2"),
    },
  ];
};

export const useTourData = () => {
  const tk = useTranslations("Tashkent");
  const k = useTranslations("Khiva");
  const b = useTranslations("Bukhara");
  const s = useTranslations("Samarkand");
  const kp = useTranslations("Karakalpakstan");

  return getTourData(tk, k, b, s, kp);
};
