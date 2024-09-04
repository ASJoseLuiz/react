interface Props {
    title: string,
}

export const bottom = ({title}: Props) => {
    return (
        <button type='button'>{title}</button>
    )
}