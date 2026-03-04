"use server";

import { httpClient } from "@/lib/axios/httpClient";
import { ApiResponse, PaginationMeta } from "@/types/api.types";

interface IDoctor {
    id: number;
    name: string;
    specialization: string;
    experience: number;
    rating: number;
}

interface DoctorsResponse {
    data: IDoctor[];
    meta: PaginationMeta;
}

export const getDoctors = async (): Promise<ApiResponse<DoctorsResponse>> => {
    const doctors = await httpClient.get<DoctorsResponse>('/doctors');
    console.log(doctors, "server");
    return doctors;
}