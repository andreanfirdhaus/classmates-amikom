import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { useState, useContext } from 'react';
import { DataContext } from '@/components/data-context';

const formSchema = z.object({
    tahunAngkatan: z.string(),
    programStudi: z.string(),
    nimAwal: z.string().min(4, { message: "NIM Awal must have at least 4 digits." }).max(4, { message: "NIM Awal must be a maximum of 4 digits." }),
    nimAkhir: z.string().min(4, { message: "NIM Akhir must have at least 4 digits." }).max(4, { message: "NIM Akhir must be a maximum of 4 digits." }),
});

type formSchemaValues = z.infer<typeof formSchema>

export default function DialogForm() {
    const { setData } = useContext(DataContext);
    const form = useForm<formSchemaValues>({
        resolver: zodResolver(formSchema),
    });

    function onSubmit(data: formSchemaValues) {
        setData(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* tahun angkatan */}
                <FormField
                    control={form.control}
                    name="tahunAngkatan"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tahun Angkatan</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Year" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {[2018, 2019, 2020, 2021, 2022, 2023].map((year) => {
                                        return (
                                            <SelectItem value={year.toString()} key={year}>
                                                {year}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* program studi */}
                <FormField
                    control={form.control}
                    name="programStudi"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Program Studi</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Prodi" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="11">Informatika</SelectItem>
                                        <SelectItem value="12">Sistem Informasi</SelectItem>
                                        <SelectItem value="95">Hubungan Internasional</SelectItem>
                                        <SelectItem value="67">
                                            Ilmu Komunikasi Internasional
                                        </SelectItem>
                                        <SelectItem value="82">Teknologi Informasi</SelectItem>
                                        <SelectItem value="96">Ilmu Komunikasi</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* nim awal */}
                <FormField
                    control={form.control}
                    name="nimAwal"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>NIM Awal</FormLabel>
                            <FormControl>
                                <Input placeholder="xxxx" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* nim akhir */}
                <FormField
                    control={form.control}
                    name="nimAkhir"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>NIM Akhir</FormLabel>
                            <FormControl>
                                <Input placeholder="xxxx" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* button submit */}
                <Button type="submit" className="w-full">
                    Check
                </Button>
            </form>
        </Form>
    );
}
