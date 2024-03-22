"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

//API's
import { createProduct } from "../../../services/admin.services";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Product Name must be at least 2 characters.",
  }),
  brand: z.string().min(2, {
    message: "Brand must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  size: z.number().positive({
    message: "Size must be a positive number.",
  }),
  price: z.number().positive({
    message: "Price must be a positive number.",
  }),
  discount: z.number().int().min(0, {
    message: "Discount must be a non-negative integer.",
  }),
  // picture: z.string(),
  stockAvailable: z.number().int().min(0, {
    message: "Stock Available must be a non-negative integer.",
  }),
  color: z.string(),
  Category: z.string(),
  images: z.array(z.instanceof(File)),
});

const Page = () => {
  const [files, setFiles] = useState([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    console.log(data);

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(image, file);
    });

    const {
      name,
      description,
      brand,
      size,
      price,
      discount,
      stockAvailable,
      color,
      Category,
    } = data;

    formData.append(name, name);
    console.log(formData);

    try {
      const response = createProduct(data);
      console.log("created products:", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 p-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Product Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input placeholder="Brand" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="size"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Size</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Size"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Price"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="discount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Discount</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Discount"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
                  multiple
                  placeholder="Picture URL"
                  type="file"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="stockAvailable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock Available</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Stock Available"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="color"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Color</FormLabel>
              <FormControl>
                <Input placeholder="Color" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category ID</FormLabel>
              <FormControl>
                <Input placeholder="Category" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Assuming images are entered as comma-separated URLs */}
        {/* https://example.com/image1.jpg, https://example.com/image2.jpg, https://example.com/image3.jpg */}
        {/* <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images (comma-separated URLs)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Image URLs"
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    // Split the comma-separated string into an array of URLs
                    const urls = value.split(",").map((url) => url.trim());
                    // Update the field value with the array of URLs
                    field.onChange(urls);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Page;
