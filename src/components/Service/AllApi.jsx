import { axiosInstance } from "./AxiosInstance";

// const BASE_URL = "https://restapinodejs.onrender.com"

export const GetAllBanner = async () => {
    try {
        return await axiosInstance.get(`/api/banner`)
    } catch (error) {
        console.log("error fetching banner", error);
    }
}

export const GetAllBlog = async () => {
    try {
        return await axiosInstance.get(`/api/allBlog`)
    } catch (error) {
        console.log("error fetching allblog", error);
    }
}

export const GetCategoryList = async () => {
    try {
        return await axiosInstance.get(`/api/showallcategory`)
    } catch (error) {
        console.log("error fetching CategoryList", error);
    }
}

export const GetRecentPost = async () => {
    try {
        return await axiosInstance.get(`/api/letest-post`)
    } catch (error) {
        console.log("error fetching ReacentPosts", error);
    }
}
export const GetBlogDetails = async (id) => {
    try {
        return await axiosInstance.get(`/api/blogdetails/${id}`)
    } catch (error) {
        console.log("error fetching allblog", error);
    }
}
export const GetCategoryDetails = async (id) => {
    try {
        return await axiosInstance.get(`/api/category/post/${id}`)
    } catch (error) {
        console.log("error fetching CategoryDetails", error);
    }
}
export const GetBlogComments = async (id) => {
    try {
        return await axiosInstance.get(`/api/comment/${id}`)
    } catch (error) {
        console.log("error fetching Comments", error);
    }
}
export const PostReplyMessage = async (id, data) => {
    try {
        return await axiosInstance.post(`/api/blog/${id}/comment/create`, data)
    } catch (error) {
        console.log("error posting Comments", error);
    }
}

export const GetServiceDetails = async () => {
    try {
        return await axiosInstance.get(`/api/service`)
    } catch (error) {
        console.log("error fetching service", error);
    }
}
export const GetTestimonialsDetails = async () => {
    try {
        return await axiosInstance.get(`/api/testimonial`)
    } catch (error) {
        console.log("error fetching testimonial", error);
    }
}
export const GetTeamDetails = async () => {
    try {
        return await axiosInstance.get(`/api/team`)
    } catch (error) {
        console.log("error fetching team", error);
    }
}
export const GetCourseDetails = async () => {
    try {
        return await axiosInstance.get(`/api/course`)
    } catch (error) {
        console.log("error fetching course", error);
    }
}
export const PostApplyCourse = async (id, data) => {
    try {
        return await axiosInstance.post(`/api/course/apply/${id}`, data)
    } catch (error) {
        console.log("error posting ", error);
    }
}
export const PostMessage = async (data) => {
    try {
        return await axiosInstance.post(`/api/contact/create`, data)
    } catch (error) {
        console.log("error posting ", error);
    }
}
export const PostLike = async (id) => {
    try {
        return await axiosInstance.put(`/api/blog/like/${id}`)
    } catch (error) {
        console.log("error posting like", error);
    }
}
export const PostDisLike = async (id) => {
    try {
        return await axiosInstance.put(`/api/blog/unlike/${id}`)
    } catch (error) {
        console.log("error posting dislike ", error);
    }
}

