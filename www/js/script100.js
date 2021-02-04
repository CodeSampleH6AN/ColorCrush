function minmax(value, min, max) {
    if (parseFloat(value) < min)
        return min;
    else if (parseFloat(value) > max)
        return max;
    else return value;
}