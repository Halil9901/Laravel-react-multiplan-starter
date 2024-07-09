<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if(empty($this->id)) {
            return [];
        }
        return [
            'id' => $this->id ?? null,
            'name' => $this->name ?? null,
            'email' => $this->email ?? null,
            'plan' => $this->getPlan(),
            'trial_ends_at' => $this->trial_ends_at ?? null,
            'avatar' => $this->whenLoaded('files' , function() {
                return new FileResource($this->files->first());
            }),
        ];
    }
}
