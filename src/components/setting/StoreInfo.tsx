import { Button } from "@/components/ui/button";
import { BiImageAdd } from "react-icons/bi";
import ValidatedInput from "../utils/ValidatedInput";
import { StoreInfoDto } from "@/dtos/StoreInfoDto";
import { useForm } from "react-hook-form";
import ValidatedTextarea from "../utils/ValidatedTextarea";
import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useStoreQuery from "@/hooks/useStoreQuery";

function StoreInfo() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<StoreInfoDto>();

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const { createStore, store, editStore } = useStoreQuery();

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setImagePreview(imagePreview);
      setValue("logo", file);
    }
  }

  function removeImage() {
    setImagePreview(null);
    setValue("logo", null as any);
  }

  function onBannerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const bannerPreview = URL.createObjectURL(file);
      setBannerPreview(bannerPreview);
      setValue("banner", file);
    }
  }

  function removeBanner() {
    setBannerPreview(null);
    setValue("banner", null as any);
  }

  const onSubmit = async (data: StoreInfoDto) => {
    try {
      const formData = new FormData();

      // Tambahkan field dan file ke FormData
      formData.append("name", data.name);
      formData.append("slogan", data.slogan);
      formData.append("description", data.description);
      formData.append("domain", data.domain || "");
      if (data.logo) formData.append("logoAttachment", data.logo);
      if (data.banner) formData.append("bannerAttachment", data.banner);

      if (store) {
        // Update store yang sudah ada
        const { mutateAsync } = editStore;
        const response = await mutateAsync({
          data: formData,
        });
        console.log("Response:", response);
      } else {
        // Buat store baru
        const { mutateAsync } = createStore;
        const response = await mutateAsync({
          data: formData,
        });
        console.log("Response:", response);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    if (store) {
      setValue("name", store.name);
      setValue("slogan", store.slogan);
      setValue("description", store.description);

      if (store.logoAttachment) {
        setImagePreview(store.logoAttachment);
      }
      if (store.bannerAttachment) {
        setBannerPreview(store.bannerAttachment);
      }
    }
  }, [store]);

  return (
    <>
      <ToastContainer position="top-center" />
      <h2 className="text-black text-lg font-bold mt-2">Informasi Toko</h2>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-1">
            <label htmlFor="slogan" className="text-sm">
              Slogan <span className="text-red-500">*</span>
            </label>
            <ValidatedInput
              error={errors.slogan}
              name="slogan"
              register={register}
              type="text"
              id="slogan"
              placeholder="Slogan Toko"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">
              Nama Toko <span className="text-red-500">*</span>
            </label>
            <ValidatedInput
              error={errors.name}
              name="name"
              register={register}
              type="text"
              id="name"
              placeholder="Toko Dumbways"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="description" className="text-sm">
            Deskripsi Toko <span className="text-red-500">*</span>
          </label>
          <ValidatedTextarea
            error={errors.description}
            name="description"
            id="description"
            register={register}
            placeholder="Toko ini menjual ?"
          />
        </div>
      </div>
      <div className="flex border-b border-lightGray pb-4">
        <Button onClick={handleSubmit(onSubmit)} className="ml-auto rounded-lg">
          {store?"edit":"simpan"}
        </Button>
      </div>
      <h2 className="text-black text-md font-bold">Logo Toko</h2>
      <div className="border border-gray border-dotted w-56 h-56 rounded-md relative">
        {imagePreview ? (
          <div className="relative w-full h-full">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover rounded-md"
            />
            <button
              className="flex justify-center items-center absolute top-1 right-1 w-6 h-6 bg-white rounded-full"
              onClick={removeImage}
            >
              <IoIosClose className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray">
            <label htmlFor="logo" className="cursor-pointer">
              <BiImageAdd size={"4rem"} />
            </label>
            <span className="text-gray">Unggah Foto</span>
          </div>
        )}
        <input
          type="file"
          id="logo"
          accept="image/*"
          onChange={onImageChange}
          className="hidden"
        />
      </div>
      <h2 className="text-black text-md font-bold">Banner Toko</h2>
      <div className="border border-gray border-dotted w-56 h-56 rounded-md relative">
        {bannerPreview ? (
          <div className="relative w-full h-full">
            <img
              src={bannerPreview}
              alt="Banner Preview"
              className="w-full h-full object-cover rounded-md"
            />
            <button
              className="flex justify-center items-center absolute top-1 right-1 w-6 h-6 bg-white rounded-full"
              onClick={removeBanner}
            >
              <IoIosClose className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray">
            <label htmlFor="banner" className="cursor-pointer">
              <BiImageAdd size={"4rem"} />
            </label>
            <span className="text-gray">Unggah Foto</span>
          </div>
        )}
        <input
          type="file"
          id="banner"
          accept="image/*"
          onChange={onBannerChange}
          className="hidden"
        />
      </div>
      <p className="text-gray text-sm">
        Ukuran optimal 300 x 300 piksel dengan Besar file: Maksimum 10
        Megabytes. <br />
        Ekstensi file yang diperbolehkan: JPG, JPEG, PNG
      </p>
    </>
  );
}

export default StoreInfo;
