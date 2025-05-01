#pragma header

void main() {
    vec4 color = flixel_texture2D(bitmap, openfl_TextureCoordv);
    float brightness = 0.333333 * (color.r + color.g + color.b);
    float binaryColor = step(0.5, brightness);

    gl_FragColor = vec4(vec3(binaryColor), color.a);
}