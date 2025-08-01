
import z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { NavLink, useNavigate } from "react-router-dom";

// const formSchema = z.object({
  
// });

const formSchema = z.object({
  fullname: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  address: z.string().min(1, "Address is required"),
  phone_no: z.string().regex(/^\d{11}$/, "Phone must be 11 digits"),
  website: z.string()
    .regex(
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/,
      "Invalid website URL"
    )
    .optional().or(z.literal('')), 
  zip_code: z.string().regex(/^\d{5}$/, "ZIP code must be 5 digits"),
});


const Signup =()=>{
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
      defaultValues:{
        fullname:"",
        email:"",
        password:"",
        address:"",
        phone_no:"",
        website:"",
        zip_code:""
      },
  })

  const onSubmit = (values: object) => {
    console.log(values);
    navigate("/signin"); 
  }

  return(
    <div className="min-h-screen flex items-center justify-center px-4 py-15">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-lg">
          <Card className="w-full max-w-lg p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Sign Up</CardTitle>
                <CardDescription>
                  Create New Account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">

            <FormField 
                control={form.control} 
                name="fullname" 
                render={({ field })=>(
                  <FormItem className="grid gap-4">
                    <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Muhammad Mukhtar" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )} />

              <FormField 
                control={form.control} 
                name="email" 
                render={({ field })=>(
                  <FormItem className="grid gap-4">
                    <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="m@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )} />

                <FormField 
                control={form.control} 
                name="password" 
                render={({ field })=>(
                  <FormItem className="grid gap-4">
                    <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )} />

                <FormField 
                control={form.control} 
                name="address" 
                render={({ field })=>(
                  <FormItem className="grid gap-4">
                    <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Address" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )} />

                <FormField 
                control={form.control} 
                name="phone_no" 
                render={({ field })=>(
                  <FormItem className="grid gap-4">
                    <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="03458888454" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )} />

                <FormField 
                control={form.control} 
                name="website" 
                render={({ field })=>(
                  <FormItem className="grid gap-4">
                    <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input placeholder="https://www.google.com/" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )} />

                <FormField 
                control={form.control} 
                name="zip_code" 
                render={({ field })=>(
                  <FormItem className="grid gap-4">
                    <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input placeholder="56000" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )} />

                <div className="text-sm text-muted-foreground text-center w-full">
                      Already have an account?{" "}
                      <NavLink to="/signin" className="text-blue-600 hover:underline">
                        Sign In
                      </NavLink>
                </div>



            </CardContent>
            <CardFooter>
              {/* <NavLink to="/signin" className="text-blue-600 hover:underline"> */}
                <Button className="w-full">Sign Up</Button>
              {/* </NavLink> */}
              
            </CardFooter>
          </Card>
          
        </form>
      </Form>

    </div>
    
  )
}

  


export default Signup;
