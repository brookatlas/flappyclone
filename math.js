function distance(pointA, pointB)
{
    let a = pointA[0] - pointB[0];
    let b = pointA[1] - pointB[1];
    return Math.sqrt((a * a) + (b * b));
}


function AABB(boxA, boxB)
{
    if((boxA[0] < (boxB[0] + boxB[2])) && ((boxA[0] + boxA[2]) > boxB[0]) && (boxA[1] < (boxB[1] + boxB[3])) && ((boxA[1] + boxA[3]) > boxB[1]))
    {
        return true;
    }

    return false;
}