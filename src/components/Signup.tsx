
import z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  fullname: z.string(),
  email: z.string(),
  password: z.string().min(8,{
    message: "Password must be atleast 8 characters"
  }),
  address: z.string(),
  phone_no: z.string().regex(/^\d{11}$/),
  website: z.string().regex(/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#\[\]@!$&'()*+,;=]*)?$/),
  zip_code: z.string().regex(/^\d{5}$/)
});

const Signup =()=>{
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

  const onSubmit = (values:object)=>{
    console.log(values)
  }

  return(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-sm">
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



          </CardContent>
          <CardFooter>
            <Button className="w-full">Sign Up</Button>
          </CardFooter>
        </Card>
        
      </form>
    </Form>
  )
}

  


export default Signup;
