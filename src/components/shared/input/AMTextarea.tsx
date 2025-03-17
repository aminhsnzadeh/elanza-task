
import { Textarea } from "@/components/ui/textarea";
import { Controller, FieldValues, Validate, ValidationRule } from "react-hook-form";

interface formTypes {
    control: any
    name: string
    id?: string
    defaultValue?: string | number | undefined | null
    innerFunction?: (event: React.SyntheticEvent) => void
    isRequired?: boolean
    handleValidation?: Validate<any, FieldValues> | Record<string, Validate<any, FieldValues>> | undefined
    errorText?: string | ValidationRule<boolean> | undefined
    [rest: string]: any
}


export default function AMTextarea(
    {
        control,
        name,
        id,
        defaultValue,
        innerFunction,
        isRequired,
        errorText,
        handleValidation,
        ...rest
    }: formTypes
) {
    //@ts-ignore
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue || ''}
            render={({ field }) => (
                <Textarea
                    {...field}
                    {...rest}
                />
            )}
            rules={{
                required: isRequired ? (errorText ? errorText : "وارد کردن این فیلد اجباری است.") : undefined,
                validate: handleValidation
            }}
        />
    )
}