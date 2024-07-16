"use client";

import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Include DropdownMenuCheckboxItem here
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getProducts } from "@/services/admin.services";
import { getCategories } from "../../../services/category.services";
import Link from "next/link";

// const data: Product[] = [
//   {
//     category_id: "1",
//     name: "Wood",
//     description: "Description for wood category",
//   },
// ];

export type Product = {
  prod_id: string;
  name: string;
  description?: string;
  size: string;
  price: string;
  brand: string;
  discount: string;
  stockAvailble: number;
  category: string;
  color: string;
  avatar: string;
};

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => <div>{row.getValue("description")}</div>,
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => <div>{row.getValue("size")}</div>,
  },
  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => <div>{row.getValue("color")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>{row.getValue("price")}</div>,
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => <div>{row.getValue("brand")}</div>,

  },
  {
    accessorKey: "stockAvailable",
    header: "Stock Available",
    cell: ({ row }) => <div>{row.getValue("stockAvailable")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "discount",
    header: "Discount",
    cell: ({ row }) => <div>{row.getValue("discount")}</div>,
  },
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => <Link href={row.getValue("avatar")} >Link</Link>,
  },

];


const page = () => {
  const [data, setData] = useState([]);
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [apiProducts, setApiProducts] = useState(null);
  const [updateProds, setUpdatedProds] = useState([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    getCoreRowModel: getCoreRowModel(),
  });


  useEffect(() => {
    try {
      getProducts().then((res) => {
        setApiProducts(res);
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    let updatedProducts = apiProducts?.map((elem, idx) => {
      const {
        imageUrl,
        images,
        category_id,
        picture,
        categoryname,
        // stockAvailable,
        ...newObj
      } = elem;
      // console.log("stock",StockAvailable);
      return {
        ...newObj,
        avatar: imageUrl,
        // status: "inStock",
        discount: "0",
        category: categoryname ?? "alsdkfna;df",
      };
    });
    console.log("updatedProducts", updatedProducts);
    setData(updatedProducts);
  }, [apiProducts]);

  // useEffect(() => {
  //   try {
  //     getCategories()
  //       .then((res) => {
  //         setData(res);
  //         console.log("get data:", res);
  //       })
  //       .catch(err);
  //     {
  //       console.log("err in getting res from getCategories");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);
  useEffect(()=>{
    console.log("data",data)
  },[data]);

  return (
    <>
  { data && <div className="container w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter categories..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Filters <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/admin/products/add-product">
          <Button variant="default" className="ml-3" onClick={() => {}}>
            Add Product
          </Button>
        </Link>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : header.column.columnDef.header}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.columnDef.cell(cell)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody> 
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
      </div>
    </div>}</>
  );
};

export default page;
