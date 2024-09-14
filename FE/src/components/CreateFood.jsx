'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { X } from 'lucide-react';
export const CreateFood = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-[130px] h-[35px] bg-[#18BA51] text-white rounded-[4px]">
        Add new food
      </DialogTrigger>
      <DialogContent className="max-w-[587px] p-0">
        <DialogHeader className="border-b py-4 px-6">
          <div className="flex justify-between items-center">
            <DialogTitle>Create food</DialogTitle>
            <DialogClose>
              <X />
            </DialogClose>
          </div>
        </DialogHeader>
        <form className="flex flex-col gap-4 p-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-[14px] leading-[19.6px] font-medium">
              Хоолны нэр
            </h3>
            <Input
              name="foodName"
              className="bg-[#F4F4F4] h-[56px] px-3 text-[#8B8E95]"
              placeholder="Хоолны нэр"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[14px] leading-[19.6px] font-medium">
              Хоолны ангилал
            </h3>
            <Input
              name="categoryName"
              className="bg-[#F4F4F4] h-[56px] px-3 text-[#8B8E95]"
              placeholder="Хоолны ангилал"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[14px] leading-[19.6px] font-medium">
              Хоолны орц
            </h3>
            <Input
              name="ingeredient"
              className="bg-[#F4F4F4] h-[56px] px-3 text-[#8B8E95]"
              placeholder="Хоолны орц"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-[14px] leading-[19.6px] font-medium">
              Хоолны үнэ
            </h3>
            <Input
              name="price"
              className="bg-[#F4F4F4] h-[56px] px-3 text-[#8B8E95]"
              placeholder="Хоолны үнэ"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="discount" />
            <Label htmlFor="discount">Хямдралтай эсэх</Label>
          </div>
          <Input
            name="discount"
            className="bg-[#F4F4F4] h-[56px] px-3 text-[#8B8E95]"
            placeholder="Хямдралын %"
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-[14px] leading-[19.6px] font-medium">
              Хоолны зураг
            </h3>
            <div className="bg-[#F4F4F4] p-2 text-[#525252] font-bold leading-6 w-[284px] h-[122px] flex flex-col items-center justify-center rounded-[8px] outline-[#D6D7DC] gap-2 outline-dashed">
              <h3>Add image for the food</h3>
              <Button className="bg-[#3F4145] text-white h-10 w-[109px] rounded-[8px]">
                Add image
              </Button>
            </div>
          </div>
        </form>
        <DialogFooter className="p-6 border-t gap-4">
          <Button
            type="button"
            className="bg-white text-[#3F4145] h-10 w-[49px]"
          >
            Clear
          </Button>
          <DialogClose>
            <Button
              type="submit"
              className="bg-[#3F4145] text-white h-10 w-[109px]"
            >
              Continue
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFood;
