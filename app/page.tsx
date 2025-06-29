"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HashLoader } from "react-spinners";
import AOS from "aos";

export default function Home() {
  const dataImage = [
    {
      id: 1,
      src: "/home/1.png",
    },
    {
      id: 2,
      src: "/home/2.png",
    },
    {
      id: 3,
      src: "/home/3.png",
    },
  ];

  const dataGroom = [
    {
      id: 1,
      src: "/the-groom-1.png",
    },
    {
      id: 2,
      src: "/the-groom-2.png",
    },
  ];

  const dataBride = [
    {
      id: 1,
      src: "/the-bride-1.png",
    },
    {
      id: 2,
      src: "/the-bride-2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexGroom, setCurrenIndexGroom] = useState(0);
  const [currentIndexBride, setCurrenIndexBride] = useState(0);
  const [isSendClick, setIsSendClick] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [iframeSrc, setIframeSrc] = useState(
    "https://www.youtube.com/embed/hedntdJQQAs?mute=1&controls=0&modestbranding=1&rel=0"
  );
  const numberToCopy = "1170011464013";
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(numberToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset teks setelah 2 detik
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      once: true, // hanya animasi sekali
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dataImage.length);
      setCurrenIndexBride((prev) => (prev + 1) % dataBride.length);
      setCurrenIndexGroom((prev) => (prev + 1) % dataGroom.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [dataImage.length, dataBride.length, dataGroom.length]);

  const handleStart = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
      audio
        .play()
        .then(() => {
          setIsStarted(true);
          setTimeout(() => {
            contentRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        })
        .catch((err) => {
          console.error("Audio play failed:", err);
        });
    }
    setIframeSrc(
      "https://www.youtube.com/embed/hedntdJQQAs?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
    );
  };

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#694A46" loading={true} size={30} />
        </div>
      )}
      {!isLoading && (
        <div
          className="max-w-md mx-auto py-4 min-h-[100dvh]"
          style={{
            backgroundImage: "url('/home/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <audio ref={audioRef} loop src="/audio/backsound.mp3" />
          <div className="flex flex-col gap-2 justify-center items-center">
            <span className="font-marcellus text-cokelat text-center animate__animated animate__fadeInDown">
              <p className="text-xs">Kepada Yth: Bapak/Ibu/Saudara/i</p>
              <p className="font-sm font-marcellus">Tamu Undangan</p>
            </span>
            <button
              className="bg-cokelat text-white px-4 py-2 rounded-full flex justify-center gap-2"
              onClick={handleStart}
            >
              <Image
                src="/open-folder.svg"
                alt="Open Folder Icon"
                width={16}
                height={16}
              />
              <span className="text-xs font-poppins font-semibold text-putih">
                Buka Undangan
              </span>
            </button>
          </div>
          <Image
            src={dataImage[currentIndex].src}
            alt={`bg-${dataImage[currentIndex].id}`}
            className="absolute bottom-1 left-1/2 -translate-x-1/2"
            width={400}
            height={400}
          />
        </div>
      )}

      {isStarted && (
        <div ref={contentRef} className="flex flex-col max-w-md mx-auto">
          <div
            className="p-8 h-screen flex flex-col justify-around items-center"
            style={{
              backgroundImage: "url('/bg-content.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full max-w-md">
              <div
                className="relative w-full"
                style={{ aspectRatio: "9 / 16" }}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={iframeSrc}
                  title="YouTube Shorts Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="p-4 h-screen animate__animated animate__fadeIn flex flex-col gap-2 justify-around items-center text-cokelatTua"
            style={{
              backgroundImage: "url('/bg-content.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="flex flex-col justify-center items-center gap-4"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Image
                src={dataBride[currentIndexBride].src}
                alt={`bg-${dataBride[currentIndexBride].id}`}
                width={150}
                height={150}
              />
              <span className="font-signature text-3xl">
                Karima Urfa Wardiani
              </span>
              <span className="font-marcellus text-center text-sm">
                Putri kedua dari
              </span>
              <span className="font-marcellus text-center text-sm">
                Bapak Abah & Ibu Etin
              </span>
            </div>
            <div className="font-signature text-7xl" data-aos="zoom-in">
              &
            </div>
            <div
              className="flex flex-col justify-center items-center gap-4"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <span className="font-signature text-3xl">
                Salman Faris Siddiq
              </span>
              <span className="font-marcellus text-center text-sm">
                Putra kedua dari
              </span>
              <span className="font-marcellus text-center text-sm">
                Bapak Wawan & Ibu Lida
              </span>
              <Image
                src={dataGroom[currentIndexGroom].src}
                alt={`bg-${dataGroom[currentIndexGroom].id}`}
                width={150}
                height={150}
              />
            </div>
          </div>
          <div
            className="p-4 h-screen animate__animated animate__fadeIn flex flex-col gap-2 justify-around items-center text-cokelatTua"
            style={{
              backgroundImage: "url('/bg-content.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="flex flex-col items-center font-signature text-4xl gap-2"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <span>Akad & Resepsi</span>
              <span>Pernikahan</span>
            </div>
            <div
              className="flex gap-8 font-marcellus items-center"
              data-aos="zoom-in-up"
            >
              <span>Sabtu</span>
              <div className="w-1 h-16 rounded-full bg-[#EAE0D4]"></div>
              <div className="flex flex-col gap-2 items-center">
                <span className="text-xl">6</span>
                <span>2025</span>
              </div>
              <div className="w-1 h-16 rounded-full bg-[#EAE0D4]"></div>
              <span>September</span>
            </div>
            <span className="font-marcellus" data-aos="zoom-in-up">
              09.00 s/d 13.30 WIB
            </span>
            <span
              className="font-signature text-3xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Lokasi Acara
            </span>
            <Image
              src={"/gedung-keraton.png"}
              width={200}
              height={200}
              alt="gedung-keraton"
              data-aos="zoom-in"
            ></Image>
            <div
              className="font-marcellus flex flex-col gap-2 items-center"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <span className="text-lg">Gedung Keraton Selagangga</span>
              <span className="text-xs text-center w-52">
                Jl. K.H. Ahmad Dahlan No..40, Ciamis, Kec. Ciamis, Kabupaten
                Ciamis, Jawa Barat 46211
              </span>
            </div>
            <button
              className="w-40 bg-cokelatTua rounded-full h-10 flex justify-center items-center gap-2"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Image
                src={"/icon-location.svg"}
                width={16}
                height={16}
                alt="icon-location"
              />
              <a
                href="https://maps.app.goo.gl/ZcnQTponHGBN78c39"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-marcellus text-white text-sm">
                  Google Maps
                </span>
              </a>
            </button>
          </div>
          <div
            className="p-4 h-screen animate__animated animate__fadeIn flex flex-col gap-24 justify-center items-center text-cokelatTua"
            style={{
              backgroundImage: "url('/bg-content.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-cokelatTua flex flex-col gap-4 justify-center items-center">
              <span
                className="font-signature text-4xl"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Wedding Gift
              </span>
              <span
                className="font-marcellus text-sm text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                Namun jika Anda ingin memberi hadiah kami sediakan fitur berikut
              </span>
              <button
                className="w-40 bg-cokelatTua rounded-full h-10 flex justify-center items-center gap-2"
                onClick={() => setIsSendClick(true)}
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <Image
                  src={"/send.svg"}
                  width={16}
                  height={16}
                  alt="icon-send"
                />
                <span className="font-marcellus text-white text-sm">
                  Kirim Cashless
                </span>
              </button>
              {isSendClick && (
                <div className="flex gap-2">
                  <Image
                    src={"/logo-mandiri.png"}
                    width={150}
                    height={150}
                    alt="logo-mandiri"
                  />
                  <div className="font-marcellus flex flex-col justify-center items-center gap-1">
                    <span className="text-sm">{numberToCopy}</span>
                    <button
                      onClick={handleCopy}
                      className="flex w-30 px-2 py-1 h-10 bg-putih rounded-md text-xs justify-center items-center "
                    >
                      {copied ? "Copied!" : "Copy to Clipboard"}
                    </button>
                    <span className="text-xs">a.n Salman Faris Siddiq</span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center gap-8 items-center">
              <span
                className="font-signature text-4xl"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                QR Code
              </span>
              <Image
                src={"/QR-Code.png"}
                width={200}
                height={200}
                alt="qr-code"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
              <span
                className="text-xs text-cokelatTua font-marcellus text-center w-40"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Gunakan QR Code ini untuk memasuki vanue pernikahan
              </span>
            </div>
          </div>
          <div
            className="h-screen animate__animated animate__fadeIn flex flex-col items-center text-cokelatTua"
            style={{
              backgroundImage: "url('/bg-content.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex-1 flex flex-col justify-center items-center gap-8 px-4">
              <span
                className="text-sm text-center font-marcellus"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Merupakan suatu kebahagiaan bagi kami, apabila
                Bapak/Ibu/Saudara/i, hadir & memberikan doa restu kepada kedua
                mempelai.
              </span>
              <span
                className="text-base font-marcellus"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Hormat Kami Yang Mengundang
              </span>
              <span
                className="font-signature text-4xl"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Karima & Salman
              </span>
            </div>

            <Image
              src={"/pohon-bawah.png"}
              width={600}
              height={600}
              alt="pohon-bawah"
              className="mt-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
