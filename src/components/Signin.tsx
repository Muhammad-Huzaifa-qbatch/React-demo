
import z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { NavLink, useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string(),
  password: z.string().min(8,{
    message: "Password must be atleast 8 characters"
  }),
});

const Signin =()=>{
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(formSchema),
      defaultValues:{
        email:"",
        password:"",
      },
  })

  const onSubmit = (values:object)=>{
    console.log(values)
    navigate("/");
  }

  return(
    <div className="min-h-screen flex items-center justify-center px-4">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Enter your email below to Signin to your account
              </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
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
          </CardContent>
          <div className="text-sm text-muted-foreground text-center w-full">
            Not have an account yet?{" "}
            <NavLink to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </NavLink>
          </div>

          <CardFooter>
            <Button className="w-full">Sign in</Button>
          </CardFooter>
        </Card>
        
      </form>
    </Form>

    </div>
    
  )
}

   


export default Signin;
