'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSearchParams } from 'next/navigation';
import DottedIcon from './icons/DottedIcon';
import { EditIcon } from './icons';
import { Trash2 } from 'lucide-react';
import EditCategory from './Editcategory';

export const CategoryEditAndDeleteDropdown = ({
  foodAndCategories,
  i,
  handlerDeleteClick,
}) => {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DottedIcon color={Number(category) === i ? '#ffffff' : '#1C1B1F'} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div>
          <EditCategory foodAndCategories={foodAndCategories} i={i} />
        </div>
        <DropdownMenuItem
          onClick={() => handlerDeleteClick(foodAndCategories[i]._id)}
          className="gap-4 py-2 px-4 text-[#161616] font-medium"
        >
          <Trash2 size={24} color="#F5222D" />
          <span className="text-[#F5222D]">Delete category</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryEditAndDeleteDropdown;